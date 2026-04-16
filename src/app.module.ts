import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3Module } from './s3/s3.module';
import { ProductModule } from './product/product.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { TigersModule } from './tigers/tigers.module';
import { CowsModule } from './cows/cows.module';
import { Product } from './product/entities/product.entity';
import { Cat } from './cats/entities/cat.entity';
import { Dog } from './dogs/entities/dog.entity';
import { Tiger } from './tigers/entities/tiger.entity';
import { Cow } from './cows/entities/cow.entity';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Product, Cat, Dog, Tiger, Cow],
        synchronize: false,
        ssl: {
          rejectUnauthorized: false,
        }
      }),
    }),
    S3Module,
    ProductModule,
    CatsModule,
    DogsModule,
    TigersModule,
    CowsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
