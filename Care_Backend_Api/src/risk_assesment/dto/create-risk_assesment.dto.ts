import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
export class CreateRiskAssesmentDto {
  @IsString()
  name: string;

  @IsString()
  type: string;


  @IsString()
  level: string;

}
