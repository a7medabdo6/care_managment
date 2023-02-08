import { Module } from '@nestjs/common';
import { PersonalCareService } from './personal-care.service';
import { PersonalCareController } from './personal-care.controller';

@Module({
  controllers: [PersonalCareController],
  providers: [PersonalCareService]
})
export class PersonalCareModule {}
