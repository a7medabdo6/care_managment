import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from 'src/plan/entities/plan.entity';
import { PlanService } from 'src/plan/plan.service';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor) private repo: Repository<Doctor>,
    private readonly planService: PlanService,
  ) {}

  async create(createDoctorDto: CreateDoctorDto, plan: Plan) {
    const Docs = await this.repo.create(createDoctorDto);
    Docs.plan = plan;
    return this.repo.save(Docs);
  }

  async findAll() {
    const doctors = await this.repo.find({});

    return doctors;
  }

  async findOne(id: number) {
    const doctor = await this.repo.findOne({
      where: { id },
      relations: { plan: true },
    });
    return doctor;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} Docs`;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('doctor not found');
    }
    return this.repo.remove(user);
  }
}
