import { IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Worker } from 'src/worker/entities/worker.entity';

export class CreateTrainingDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  proof_of_training: string;

  @IsString()
  expiry_date: string;

  @IsString()
  status: string;

  @IsString()
  comment: string;

  @IsNumber()
  workerId: number;
}
