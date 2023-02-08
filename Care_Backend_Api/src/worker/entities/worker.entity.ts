import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  BOD: string;

  @Column()
  Ni_Number: string;

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
  user: User;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
