import { PartialType } from '@nestjs/swagger';
import { CreatePersonalCareDto } from './create-personal-care.dto';

export class UpdatePersonalCareDto extends PartialType(CreatePersonalCareDto) {}
