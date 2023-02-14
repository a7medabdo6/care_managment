import { Module } from '@nestjs/common';
import { OralCareService } from './oral-care.service';
import { OralCareController } from './oral-care.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OralCare } from './entities/oral-care.entity';

@Module({
  controllers: [OralCareController],
  imports: [TypeOrmModule.forFeature([OralCare])],
  exports: [OralCareService],

  providers: [OralCareService],
})
export class OralCareModule {}
