import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RiskAssesment } from 'src/risk_assesment/entities/risk_assesment.entity';
import { User } from 'src/users/entities/user.entity';
import { In, Repository } from 'typeorm';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './entities/plan.entity';

@Injectable()
export class PlanService {
  constructor(@InjectRepository(Plan) private repo: Repository<Plan>) {}

  async create(
    createPlanDto: CreatePlanDto,
    User: User,
    risks: RiskAssesment[],
  ) {
    const plan = await this.repo.create(createPlanDto);
    plan.user = User;
    plan.riskAssesments = risks;
    return this.repo.save(plan);
  }

  async findAll() {
    const plans = await this.repo.find({});
    return plans;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const plan = await this.repo.findOne({ where: { id } });
    if (!plan) {
      throw new NotFoundException('plan not found');
    }
    return plan;
  }
  async update(id: number, updatePlanDto: UpdatePlanDto) {
    const plan = await this.findOne(id);
    if (!plan) {
      throw new NotFoundException('plan not found');
    }
    Object.assign(plan, updatePlanDto);
    return this.repo.save(plan);
  }

  async remove(id: number) {
    const plan = await this.findOne(id);
    if (!plan) {
      throw new NotFoundException('plan not found');
    }
    return this.repo.remove(plan);
  }
}
