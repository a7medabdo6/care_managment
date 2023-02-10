import { Injectable } from '@nestjs/common';
import { CreatePersonalCareDto } from './dto/create-personal-care.dto';
import { UpdatePersonalCareDto } from './dto/update-personal-care.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { PersonalCare } from './entities/personal-care.entity';

@Injectable()
export class PersonalCareService {
  constructor(
    @InjectRepository(PersonalCare) private repo: Repository<PersonalCare>,
  ) {}

  async create(createpersonalCareDto: CreatePersonalCareDto) {
    const personalCare = await this.repo.create(createpersonalCareDto);

    return this.repo.save(personalCare);
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
    const personalCare = await this.repo.find({});
    return personalCare;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const personalCare = await this.repo.findOne({ where: { id } });
    if (!personalCare) {
      throw new NotFoundException('personalCare not found');
    }
    return personalCare;
  }
  async update(id: number, updatepersonalCareDto: UpdatePersonalCareDto) {
    const personalCare = await this.findOne(id);
    if (!personalCare) {
      throw new NotFoundException('personalCare not found');
    }
    Object.assign(personalCare, updatepersonalCareDto);
    return this.repo.save(personalCare);
  }

  async remove(id: number) {
    const personalCare = await this.findOne(id);
    if (!personalCare) {
      throw new NotFoundException('personalCare not found');
    }
    return this.repo.remove(personalCare);
  }
}
