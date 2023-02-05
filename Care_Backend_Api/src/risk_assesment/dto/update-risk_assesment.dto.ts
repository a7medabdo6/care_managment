import { PartialType } from '@nestjs/swagger';
import { CreateRiskAssesmentDto } from './create-risk_assesment.dto';

export class UpdateRiskAssesmentDto extends PartialType(CreateRiskAssesmentDto) {}
