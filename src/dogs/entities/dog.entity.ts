import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;
}
