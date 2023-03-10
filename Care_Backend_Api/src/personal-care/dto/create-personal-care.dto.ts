import { IsOptional, IsString } from 'class-validator';

export class CreatePersonalCareDto {
  @IsString()
  name: string;

  @IsString()
  frequency: string;

  @IsString()
  time: string;

  @IsString()
  dirctions: string;
}
