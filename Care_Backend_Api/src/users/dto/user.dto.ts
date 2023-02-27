import { Expose, Transform } from 'class-transformer';
import { Plan } from 'src/plan/entities/plan.entity';
import { Worker } from 'src/worker/entities/worker.entity';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  username: string;

  @Expose()
  role: number;

  @Expose()
  createBy: number;
  @Expose()
  Token: string;

  @Transform(({ obj }) => obj.worker)
  @Expose()
  worker: any;
  @Transform(({ obj }) => obj.plans)
  @Expose()
  plans: Plan;
}
