import { Expose, Transform } from 'class-transformer';
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
  worker: Worker;
}
