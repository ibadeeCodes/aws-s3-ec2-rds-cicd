import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tiger {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  species: string;
}
