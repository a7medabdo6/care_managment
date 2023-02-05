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

  @IsString()
  personal_care: string;

  @IsString()
  continence_care: string;

  @IsString()
  comunication: string;

  @IsString()
  oral_care: string;

  @IsString()
  nutrition_and_hydration: string;

  @IsString()
  skin_care: string;

  @IsString()
  social_intersts: string;

  @IsString()
  night_time_support: string;

  @IsString()
  emotional_support: string;

  @IsString()
  expressing_sexuality: string;

  @IsString()
  health_care: string;

  @IsString()
  medication_managment: string;

  @IsString()
  mental_health: string;

  @IsString()
  end_og_life_preference: string;

  @IsString()
  breathing: string;

  @IsString()
  frequency: string;

  @IsString()
  spiritual_and_culture_wellbeing: string;

  @IsNumber()
  userId: number;

  @IsArray()
  risks: [];
}
