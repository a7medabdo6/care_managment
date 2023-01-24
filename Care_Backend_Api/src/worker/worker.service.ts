import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';

@Injectable()
export class WorkerService {
  constructor(@InjectRepository(Worker) private repo: Repository<Worker>) {}

  async create(createWorkerDto: CreateWorkerDto) {
    const Worker = await this.repo.create(createWorkerDto);

    const profile = await this.repo.save(Worker);
 return profile
  }

  findAll() {
    return `This action returns all worker`;
  }

  async findOne(id: number) {
    const Worker = await this.repo.findOne({
      where: { id },
      relations: { user: true },
    });
    return Worker;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
