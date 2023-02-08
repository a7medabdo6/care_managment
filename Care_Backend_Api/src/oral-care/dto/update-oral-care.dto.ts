import { PartialType } from '@nestjs/swagger';
import { CreateOralCareDto } from './create-oral-care.dto';

export class UpdateOralCareDto extends PartialType(CreateOralCareDto) {}
