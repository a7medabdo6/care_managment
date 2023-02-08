import { Module } from '@nestjs/common';
import { SocialInterestsService } from './social-interests.service';
import { SocialInterestsController } from './social-interests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialInterest } from './entities/social-interest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialInterest])],

  controllers: [SocialInterestsController],
  providers: [SocialInterestsService],
  exports: [SocialInterestsService],
})
export class SocialInterestsModule {}
