import { CreateHouseKeepingDto } from './dto/create-house-keeping.dto';
import { UpdateHouseKeepingDto } from './dto/update-house-keeping.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { HouseKeeping } from './entities/house-keeping.entity';
@Injectable()
export class HouseKeepingService {
  constructor(
    @InjectRepository(HouseKeeping) private repo: Repository<HouseKeeping>,
  ) {}

  async create(createHouseKeepingDto: CreateHouseKeepingDto) {
    const HouseKeeping = await this.repo.create(createHouseKeepingDto);

    return this.repo.save(HouseKeeping);
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
    const HouseKeeping = await this.repo.find({});
    return HouseKeeping;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const HouseKeeping = await this.repo.findOne({ where: { id } });
    if (!HouseKeeping) {
      throw new NotFoundException('HouseKeeping not found');
    }
    return HouseKeeping;
  }
  async update(id: number, updateHouseKeepingDto: UpdateHouseKeepingDto) {
    const HouseKeeping = await this.findOne(id);
    if (!HouseKeeping) {
      throw new NotFoundException('HouseKeeping not found');
    }
    Object.assign(HouseKeeping, updateHouseKeepingDto);
    return this.repo.save(HouseKeeping);
  }

  async remove(id: number) {
    const HouseKeeping = await this.findOne(id);
    if (!HouseKeeping) {
      throw new NotFoundException('HouseKeeping not found');
    }
    return this.repo.remove(HouseKeeping);
  }
}
