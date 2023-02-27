import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Training } from 'src/training/entities/training.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateWorkerDto {
  @IsString()
  BOD: string;

  @IsString()
  Ni_Number: string;

  @IsString()
  Adress: string;

  @IsString()
  phone: string;

  @IsString()
  next_of_kin: string;

  @IsString()
  sex: string;

  @IsString()
  next_of_kin_Contact: string;

  // @IsString()
  // @IsOptional()
  // training: string;

  @IsString()
  @IsOptional()
  Application: string;

  @IsNumber()
  @IsOptional()
  training: Training;
}
