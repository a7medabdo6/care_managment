import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Plan } from 'src/plan/entities/plan.entity';

export class CreateNoteDto {
  @IsString()
  type: string;

  @IsString()
  text: string;

  @IsOptional()
  doc: string;

  @IsOptional()
  planId: number;
}
