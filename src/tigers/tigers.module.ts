import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TigersService } from './tigers.service';
import { TigersController } from './tigers.controller';
import { Tiger } from './entities/tiger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tiger])],
  providers: [TigersService],
  controllers: [TigersController],
})
export class TigersModule {}
