import { PartialType } from '@nestjs/swagger';
import { CreateSocialInterestDto } from './create-social-interest.dto';

export class UpdateSocialInterestDto extends PartialType(CreateSocialInterestDto) {}
