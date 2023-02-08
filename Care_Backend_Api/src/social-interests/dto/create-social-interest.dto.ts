import { IsBoolean, IsString } from 'class-validator';

export class CreateSocialInterestDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsBoolean()
  is_done: boolean;
}
