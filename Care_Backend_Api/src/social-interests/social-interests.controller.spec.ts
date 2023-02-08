import { Test, TestingModule } from '@nestjs/testing';
import { SocialInterestsController } from './social-interests.controller';
import { SocialInterestsService } from './social-interests.service';

describe('SocialInterestsController', () => {
  let controller: SocialInterestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialInterestsController],
      providers: [SocialInterestsService],
    }).compile();

    controller = module.get<SocialInterestsController>(SocialInterestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
