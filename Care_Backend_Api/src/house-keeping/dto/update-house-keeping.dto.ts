import { PartialType } from '@nestjs/swagger';
import { CreateHouseKeepingDto } from './create-house-keeping.dto';

export class UpdateHouseKeepingDto extends PartialType(CreateHouseKeepingDto) {}
