import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  BOD: string;

}
