import { Plan } from 'src/plan/entities/plan.entity';
import { Report } from 'src/reports/entities/report.entity';
import { Worker } from 'src/worker/entities/worker.entity';
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

  @Column({ default: 1 })
  createBy: number;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @OneToOne(() => Worker, (worker) => worker.user) // specify inverse side as a second parameter
  @JoinColumn()
  worker: Worker;

  @OneToMany(() => Plan, (plan) => plan.user)
  plans: Plan[];

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
