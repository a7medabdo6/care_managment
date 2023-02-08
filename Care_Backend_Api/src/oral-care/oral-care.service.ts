import { CreateOralCareDto } from './dto/create-oral-care.dto';
import { UpdateOralCareDto } from './dto/update-oral-care.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { OralCare } from './entities/oral-care.entity';
@Injectable()
export class OralCareService {
  constructor(@InjectRepository(OralCare) private repo: Repository<OralCare>) {}

  async create(createOralCareDto: CreateOralCareDto) {
    const oralCare = await this.repo.create(createOralCareDto);

    return this.repo.save(oralCare);
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
    const oralCare = await this.repo.find({});
    return oralCare;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const oralCare = await this.repo.findOne({ where: { id } });
    if (!oralCare) {
      throw new NotFoundException('oralCare not found');
    }
    return oralCare;
  }
  async update(id: number, updateOralCareDto: UpdateOralCareDto) {
    const oralCare = await this.findOne(id);
    if (!oralCare) {
      throw new NotFoundException('oralCare not found');
    }
    Object.assign(oralCare, updateOralCareDto);
    return this.repo.save(oralCare);
  }

  async remove(id: number) {
    const oralCare = await this.findOne(id);
    if (!oralCare) {
      throw new NotFoundException('oralCare not found');
    }
    return this.repo.remove(oralCare);
  }
}
