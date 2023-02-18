import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Plan } from 'src/plan/entities/plan.entity';

export class CreateDoctorDto {
  @IsString()
  phone: string;

  @IsString()
  name: string;

  @IsString()
  email: string;
  @IsString()
  photo: string;
  @IsString()
  @IsOptional()
  extra: string;

  @IsNumber()
  planId: Plan;
}
