import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { CreateRiskAssesmentDto } from './dto/create-risk_assesment.dto';
import { UpdateRiskAssesmentDto } from './dto/update-risk_assesment.dto';
import { RiskAssesment } from './entities/risk_assesment.entity';

@Injectable()
export class RiskAssesmentService {
  constructor(
    @InjectRepository(RiskAssesment) private repo: Repository<RiskAssesment>,
  ) {}

  async create(CreateRiskAssesmentDto: CreateRiskAssesmentDto) {
    const risk = await this.repo.create(CreateRiskAssesmentDto);

    return this.repo.save(risk);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new UnauthorizedException('unAuthorized');
    }
    const plan = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!plan) {
      throw new NotFoundException('plan not found');
    }
    return plan;
  }
  async findAll() {
    const risk = await this.repo.find({});
    return risk;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const risk = await this.repo.findOne({ where: { id } });
    if (!risk) {
      throw new NotFoundException('risk not found');
    }
    return risk;
  }
  async update(id: number, updateRiskAssesmentDto: UpdateRiskAssesmentDto) {
    const risk = await this.findOne(id);
    if (!risk) {
      throw new NotFoundException('risk not found');
    }
    Object.assign(risk, updateRiskAssesmentDto);
    return this.repo.save(risk);
  }

  async remove(id: number) {
    const risk = await this.findOne(id);
    if (!risk) {
      throw new NotFoundException('risk not found');
    }
    return this.repo.remove(risk);
  }
}
