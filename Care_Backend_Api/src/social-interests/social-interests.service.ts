import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSocialInterestDto } from './dto/create-social-interest.dto';
import { UpdateSocialInterestDto } from './dto/update-social-interest.dto';
import { SocialInterest } from './entities/social-interest.entity';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { In } from 'typeorm';
@Injectable()
export class SocialInterestsService {
  constructor(
    @InjectRepository(SocialInterest) private repo: Repository<SocialInterest>,
  ) {}

  async create(createSocialInterestDto: CreateSocialInterestDto) {
    const socialInterest = await this.repo.create(createSocialInterestDto);

    return this.repo.save(socialInterest);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new UnauthorizedException('unAuthorized');
    }
    const socialInterest = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!socialInterest) {
      throw new NotFoundException('socialInterest not found');
    }
    return socialInterest;
  }
  async findAll() {
    const socialInterest = await this.repo.find({});
    return socialInterest;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const socialInterest = await this.repo.findOne({ where: { id } });
    if (!socialInterest) {
      throw new NotFoundException('socialInterest not found');
    }
    return socialInterest;
  }
  async update(id: number, updateSocialInterestDto: UpdateSocialInterestDto) {
    const socialInterest = await this.findOne(id);
    if (!socialInterest) {
      throw new NotFoundException('socialInterest not found');
    }
    Object.assign(socialInterest, updateSocialInterestDto);
    return this.repo.save(socialInterest);
  }
  async updateMany(ids: any, updateSocialInterestDto: UpdateSocialInterestDto) {
    const socialInterest = await this.findAllByIds(ids);
    if (!socialInterest) {
      throw new NotFoundException('socialInterest not found');
    }
    await this.repo
      .createQueryBuilder()
      .update(SocialInterest)
      .set({ is_done: true })
      .where({ id: In([1, 2]) })
      .execute();
  }

  async remove(id: number) {
    const socialInterest = await this.findOne(id);
    if (!socialInterest) {
      throw new NotFoundException('socialInterest not found');
    }
    return this.repo.remove(socialInterest);
  }
}
