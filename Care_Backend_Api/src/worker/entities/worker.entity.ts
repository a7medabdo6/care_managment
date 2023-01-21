import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  BOD: string;

  @Column()
  Ni_Number: number;

  @Column()
  Adress: string;

  @Column()
  phone: string;

  @Column()
  next_of_kin: string;

  @Column()
  sex: string;

  @Column()
  next_of_kin_Contact: string;

  @Column()
  training: string;

  @Column()
  Application: string;

  @OneToOne(() => User, (user) => user.worker) // specify inverse side as a second parameter
    user: User
}
