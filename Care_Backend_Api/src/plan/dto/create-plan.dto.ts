import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
export class CreatePlanDto {
  @IsString()
  service_user_lcds_number: string;

  @IsString()
  date: string;

  @IsString()
  level_of_understand: string;

  @IsString()
  mobility: string;

  @IsOptional()
  personal_care: string;

  @IsOptional()
  continence_care: string;

  @IsOptional()
  comunication: string;

  @IsOptional()
  nutrition_and_hydration: string;

  @IsOptional()
  skin_care: string;

  // @IsOptional()
  // social_intersts: string;

  @IsOptional()
  night_time_support: string;

  @IsOptional()
  emotional_support: string;

  @IsOptional()
  expressing_sexuality: string;

  @IsOptional()
  health_care: string;

  @IsOptional()
  medication_managment: string;

  @IsOptional()
  mental_health: string;

  @IsOptional()
  end_og_life_preference: string;

  @IsOptional()
  breathing: string;

  @IsOptional()
  frequency: string;

  @IsOptional()
  spiritual_and_culture_wellbeing: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  clientId: number;

  @IsArray()
  risks: [];

  @IsArray()
  socialInterests: [];

  @IsArray()
  oral_care: [];
}
