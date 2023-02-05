import { Module } from '@nestjs/common';
import { RiskAssesmentService } from './risk_assesment.service';
import { RiskAssesmentController } from './risk_assesment.controller';
import { RiskAssesment } from './entities/risk_assesment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RiskAssesmentController],
  imports: [TypeOrmModule.forFeature([RiskAssesment])],

  providers: [RiskAssesmentService],
  exports: [RiskAssesmentService],
})
export class RiskAssesmentModule {}
