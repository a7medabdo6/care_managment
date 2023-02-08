import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { SocialInterest } from 'src/social-interests/entities/social-interest.entity';
import { SocialInterestsService } from 'src/social-interests/social-interests.service';
import { Repository } from 'typeorm';

@Injectable()
export class CronService {
  //   constructor(
  //     @InjectRepository(SocialInterest) private repo: Repository<SocialInterest>,
  //   ) {}
  constructor(private readonly socialInterests: SocialInterestsService) {}

  @Cron('50 1 * 1 1 *')
  async handleCron() {
    const socialInterest = await this.socialInterests.updateMany([1, 2], {
      is_done: true,
    });

    console.log(socialInterest);
  }
}
