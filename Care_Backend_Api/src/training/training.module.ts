import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Training } from './entities/training.entity';
import { UsersModule } from 'src/users/users.module';
import { WorkerModule } from 'src/worker/worker.module';

@Module({
  imports: [TypeOrmModule.forFeature([Training]), WorkerModule],
  controllers: [TrainingController],
  providers: [TrainingService],
})
export class TrainingModule {}
