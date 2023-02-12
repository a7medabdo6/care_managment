import { Module } from '@nestjs/common';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Worker } from './worker/entities/worker.entity';
import { Report } from './reports/entities/report.entity';
import { WorkerModule } from './worker/worker.module';
import { ServiceUserModule } from './service-user/service-user.module';
import { ServiceUser } from './service-user/entities/service-user.entity';
import { ConfigModule } from '@nestjs/config';
import { PlanModule } from './plan/plan.module';
import { Plan } from './plan/entities/plan.entity';
import { RiskAssesmentModule } from './risk_assesment/risk_assesment.module';
import { RiskAssesment } from './risk_assesment/entities/risk_assesment.entity';
import { SocialInterestsModule } from './social-interests/social-interests.module';
import { SocialInterest } from './social-interests/entities/social-interest.entity';
import { CronService } from './cron/cron.service';
import { OralCareModule } from './oral-care/oral-care.module';
import { PersonalCareModule } from './personal-care/personal-care.module';
import { OralCare } from './oral-care/entities/oral-care.entity';
import { PersonalCare } from './personal-care/entities/personal-care.entity';
import { HouseKeepingModule } from './house-keeping/house-keeping.module';
import { HouseKeeping } from './house-keeping/entities/house-keeping.entity';
@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: 'production.env',
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: './src/i18n/',
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [
        User,
        Report,
        Worker,
        ServiceUser,
        Plan,
        RiskAssesment,
        SocialInterest,
        OralCare,
        PersonalCare,
        HouseKeeping,
        PersonalCare,
      ],
      synchronize: true,
    }),
    UsersModule,
    // ReportsModule,
    WorkerModule,
    ServiceUserModule,
    PlanModule,
    RiskAssesmentModule,
    SocialInterestsModule,
    OralCareModule,
    PersonalCareModule,
    HouseKeepingModule,
    PersonalCareModule,
  ],
  controllers: [AppController],
  providers: [AppService, CronService],
})
export class AppModule {}
