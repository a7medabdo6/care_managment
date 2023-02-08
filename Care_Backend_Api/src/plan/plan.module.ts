import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { UsersModule } from 'src/users/users.module';
import { RiskAssesmentModule } from 'src/risk_assesment/risk_assesment.module';
import { SocialInterestsModule } from 'src/social-interests/social-interests.module';
import { ServiceUserModule } from 'src/service-user/service-user.module';
import { OralCareModule } from 'src/oral-care/oral-care.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Plan]),
    UsersModule,
    RiskAssesmentModule,
    SocialInterestsModule,
    ServiceUserModule,
    OralCareModule,
  ],

  controllers: [PlanController],
  providers: [PlanService, CurrentUserInterceptor],
})
export class PlanModule {}
