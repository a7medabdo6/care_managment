import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiskAssesmentService } from './risk_assesment.service';
import { CreateRiskAssesmentDto } from './dto/create-risk_assesment.dto';
import { UpdateRiskAssesmentDto } from './dto/update-risk_assesment.dto';

@Controller('risk-assesment')
export class RiskAssesmentController {
  constructor(private readonly riskAssesmentService: RiskAssesmentService) {}

  @Post()
  create(@Body() createRiskAssesmentDto: CreateRiskAssesmentDto) {
    return this.riskAssesmentService.create(createRiskAssesmentDto);
  }

  @Get()
  findAll() {
    return this.riskAssesmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riskAssesmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiskAssesmentDto: UpdateRiskAssesmentDto) {
    return this.riskAssesmentService.update(+id, updateRiskAssesmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riskAssesmentService.remove(+id);
  }
}
