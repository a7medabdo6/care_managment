import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HouseKeeping } from 'src/house-keeping/entities/house-keeping.entity';
import { OralCare } from 'src/oral-care/entities/oral-care.entity';
import { PersonalCare } from 'src/personal-care/entities/personal-care.entity';
import { RiskAssesment } from 'src/risk_assesment/entities/risk_assesment.entity';
import { ServiceUser } from 'src/service-user/entities/service-user.entity';
import { SocialInterest } from 'src/social-interests/entities/social-interest.entity';
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
    Client: ServiceUser,
    risks: RiskAssesment[],
    socialInterests: SocialInterest[],
    oralcare: OralCare[],
    houseKeeping: HouseKeeping[],
    personalcare: PersonalCare[],
  ) {
    const plan = await this.repo.create(createPlanDto);
    plan.user = User;
    plan.client = Client;
    plan.riskAssesments = risks;
    plan.socialInterests = socialInterests;
    plan.oral_care = oralcare;
    plan.house_keeping = houseKeeping;
    plan.personal_care = personalcare;
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
