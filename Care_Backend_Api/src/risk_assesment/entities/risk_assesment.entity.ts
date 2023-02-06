import { Plan } from 'src/plan/entities/plan.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RiskAssesment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;
  
  @Column()
  level: string;

  @ManyToMany(() => Plan, (plan) => plan.riskAssesments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  plans?: Plan[];
}
