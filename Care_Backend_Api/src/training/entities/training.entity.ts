import { User } from 'src/users/entities/user.entity';
import { Worker } from 'src/worker/entities/worker.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Training {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  proof_of_training: string;

  @Column()
  expiry_date: string;

  @Column()
  status: string;

  @Column()
  comment: string;

  @ManyToOne(() => Worker, (worker) => worker.training) // specify inverse side as a second parameter
  worker: Worker;

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
