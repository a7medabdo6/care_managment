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

@Module({
  imports: [
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
      host: 'localhost',
      port: 3306,
      username: 'root2',
      password: '',
      database: 'care',
      entities: [User, Report, Worker],
      synchronize: true,
    }),
    UsersModule,
    // ReportsModule,
    WorkerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
