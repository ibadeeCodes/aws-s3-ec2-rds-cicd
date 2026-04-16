import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;
}
