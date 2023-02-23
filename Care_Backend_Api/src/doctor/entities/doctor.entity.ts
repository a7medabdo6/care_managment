import { Plan } from 'src/plan/entities/plan.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  photo: string;

  @ManyToOne(() => Plan, (plan) => plan.doctors) // specify inverse side as a second parameter
  plan: Plan;
}
