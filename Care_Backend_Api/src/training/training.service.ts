import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { Training } from './entities/training.entity';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { WorkerService } from 'src/worker/worker.service';
@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(Training) private repo: Repository<Training>,
    private readonly workerService: WorkerService,
  ) {}

  async create(createTrainingDto: CreateTrainingDto, worker: any) {
    const training = await this.repo.create(createTrainingDto);
    training.worker = worker;
    return this.repo.save(training);
  }

  async findAll() {
    const trainings = await this.repo.find({});

    return trainings;
  }

  async findOne(id: number) {
    const training = await this.repo.findOne({
      where: { id },
    });
    return training;
  }

  update(id: number, updateTrainingDto: UpdateTrainingDto) {
    return `This action updates a #${id} Docs`;
  }

  async remove(id: number) {
    const training = await this.findOne(id);
    if (!training) {
      throw new NotFoundException('training not found');
    }
    return this.repo.remove(training);
  }
}
