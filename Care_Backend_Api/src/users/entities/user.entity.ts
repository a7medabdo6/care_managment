import { Report } from 'src/reports/entities/report.entity';
import { Worker } from 'src/worker/entities/worker.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  role: number;

  @Column()
  createBy: number;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @OneToOne(() => Worker, (worker) => worker.user) // specify inverse side as a second parameter
  @JoinColumn()
  worker: Worker;
}
