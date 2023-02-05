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

@Controller('plan')
@UseInterceptors(CurrentUserInterceptor)
@UseGuards(AuthGuard)
export class PlanController {
  constructor(
    private readonly planService: PlanService,
    private readonly usersService: UsersService,
    private readonly risksService: RiskAssesmentService,
  ) {}

  @Post()
  async create(@Body() createPlanDto: CreatePlanDto, @CurrentUser() user: any) {
    const User = await this.usersService.findOne(createPlanDto.userId);
    const risks = await this.risksService.findAllByIds(createPlanDto.risks);

    return this.planService.create(createPlanDto, User, risks);
  }

  @Get()
  findAll() {
    return this.planService.findAll();
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
