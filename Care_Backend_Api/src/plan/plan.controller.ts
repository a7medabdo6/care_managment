import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { UsersService } from 'src/users/users.service';
import { RiskAssesmentService } from 'src/risk_assesment/risk_assesment.service';
import { ServiceUserService } from 'src/service-user/service-user.service';
import { SocialInterestsService } from 'src/social-interests/social-interests.service';
import { OralCare } from 'src/oral-care/entities/oral-care.entity';
import { OralCareService } from 'src/oral-care/oral-care.service';
import { HouseKeepingService } from 'src/house-keeping/house-keeping.service';
import { PersonalCareService } from 'src/personal-care/personal-care.service';

@Controller('plan')
@UseInterceptors(CurrentUserInterceptor)
@UseGuards(AuthGuard)
export class PlanController {
  constructor(
    private readonly planService: PlanService,
    private readonly usersService: UsersService,
    private readonly clientService: ServiceUserService,
    private readonly risksService: RiskAssesmentService,
    private readonly socialInterests: SocialInterestsService,
    private readonly oralcareservice: OralCareService,
    private readonly HouseKeepingService: HouseKeepingService,
    private readonly PersonalCareService: PersonalCareService,
  ) {}

  @Post()
  async create(@Body() createPlanDto: CreatePlanDto, @CurrentUser() user: any) {
    const User = await this.usersService.findOne(createPlanDto.userId);
    const Client = await this.clientService.findOne(createPlanDto.clientId);

    const risks = await this.risksService.findAllByIds(createPlanDto.risks);
    const oralcare = await this.oralcareservice.findAllByIds(
      createPlanDto.oral_care,
    );
    const socialInterests = await this.socialInterests.findAllByIds(
      createPlanDto.socialInterests,
    );
    const houseKeeping = await this.HouseKeepingService.findAllByIds(
      createPlanDto.house_keeping,
    );
    const personalcare = await this.PersonalCareService.findAllByIds(
      createPlanDto.personal_care,
    );
    return this.planService.create(
      createPlanDto,
      User,
      Client,
      risks,
      socialInterests,
      oralcare,
      houseKeeping,
      personalcare,
    );
  }

  @Get()
  findAll() {
    return this.planService.findAll();
  }
  @Get('worker-plans/:id')
  findallForOneWorker(@Param('id') id:string){
    return this.planService.findallForOneWorker(+id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(+id, updatePlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planService.remove(+id);
  }
}
