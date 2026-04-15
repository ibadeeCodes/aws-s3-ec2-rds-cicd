import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Product } from '../product/entities/product.entity';
import { Cat } from '../cats/entities/cat.entity';
import { Dog } from '../dogs/entities/dog.entity';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'nestjs_db',
  entities: [Product, Cat, Dog],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  ssl: {
    rejectUnauthorized: false,
  },
});
