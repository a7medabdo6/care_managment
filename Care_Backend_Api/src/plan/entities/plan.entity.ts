import { RiskAssesment } from 'src/risk_assesment/entities/risk_assesment.entity';
import { ServiceUser } from 'src/service-user/entities/service-user.entity';
import { User } from 'src/users/entities/user.entity';
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
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  service_user_lcds_number: string;

  @Column()
  date: string;

  @Column()
  level_of_understand: string;

  @Column()
  mobility: string;

  @Column()
  personal_care: string;

  @Column()
  continence_care: string;

  @Column()
  comunication: string;

  @Column()
  oral_care: string;

  @Column()
  nutrition_and_hydration: string;

  @Column()
  skin_care: string;

  @Column()
  social_intersts: string;

  @Column()
  night_time_support: string;

  @Column()
  emotional_support: string;

  @Column()
  expressing_sexuality: string;

  @Column()
  health_care: string;

  @Column()
  medication_managment: string;

  @Column()
  mental_health: string;

  @Column()
  end_og_life_preference: string;

  @Column()
  breathing: string;

  @Column()
  frequency: string;

  @Column()
  spiritual_and_culture_wellbeing: string;

  @ManyToOne(() => User, (user) => user.plans)
  user: User;
  
  @ManyToOne(() => ServiceUser, (serviceUser) => serviceUser.plans)
  client: ServiceUser;

  @ManyToMany(
    () => RiskAssesment, 
    riskAssesment => riskAssesment.plans, //optional
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinTable({
      name: 'plan_riskAssement',
      joinColumn: {
        name: 'plan_id',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'riskassement_id',
        referencedColumnName: 'id',
      },
    })
    riskAssesments?: RiskAssesment[];
}
