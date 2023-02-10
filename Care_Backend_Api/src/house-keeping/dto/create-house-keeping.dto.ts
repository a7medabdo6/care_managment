import { IsOptional, IsString } from 'class-validator';

export class CreateHouseKeepingDto {
  @IsString()
  name: string;

  //   @IsOptional()
  //   type: string;

  @IsString()
  frequency: string;

  @IsString()
  time: string;

  @IsString()
  dirctions: string;
}
