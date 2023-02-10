import { Plan } from 'src/plan/entities/plan.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class HouseKeeping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  frequency: string;

  @Column()
  time: string;

  @Column()
  dirctions: string;

  @Column({
    default: false,
  })
  is_done: boolean;

  @ManyToMany(() => Plan, (plan) => plan.house_keeping, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  plans?: Plan[];

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
