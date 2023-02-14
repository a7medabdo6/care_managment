import { Module } from '@nestjs/common';
import { PersonalCareService } from './personal-care.service';
import { PersonalCareController } from './personal-care.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalCare } from './entities/personal-care.entity';

@Module({
  controllers: [PersonalCareController],
  providers: [PersonalCareService],
  imports: [TypeOrmModule.forFeature([PersonalCare])],
  exports: [PersonalCareService],
})
export class PersonalCareModule {}
