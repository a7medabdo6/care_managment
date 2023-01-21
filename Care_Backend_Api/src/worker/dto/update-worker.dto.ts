import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkerDto } from './create-worker.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {}
