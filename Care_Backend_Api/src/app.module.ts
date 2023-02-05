import { Module } from '@nestjs/common';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Worker } from './worker/entities/worker.entity';
import { ReportsModule } from './reports/reports.module';
import { Report } from './reports/entities/report.entity';
import { CategoryModule } from './category/category.module';
import { WorkerModule } from './worker/worker.module';
import { ServiceUserModule } from './service-user/service-user.module';
import { ServiceUser } from './service-user/entities/service-user.entity';
import { ConfigModule } from '@nestjs/config';
import { PlanModule } from './plan/plan.module';
import { Plan } from './plan/entities/plan.entity';
import { RiskAssesmentModule } from './risk_assesment/risk_assesment.module';
import { RiskAssesment } from './risk_assesment/entities/risk_assesment.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'development.env',
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
      entities: [User, Report, Worker, ServiceUser, Plan, RiskAssesment],
      synchronize: false,
    }),
    UsersModule,
    // ReportsModule,
    WorkerModule,
    ServiceUserModule,
    PlanModule,
    RiskAssesmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
