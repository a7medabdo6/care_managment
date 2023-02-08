import { Test, TestingModule } from '@nestjs/testing';
import { SocialInterestsService } from './social-interests.service';

describe('SocialInterestsService', () => {
  let service: SocialInterestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialInterestsService],
    }).compile();

    service = module.get<SocialInterestsService>(SocialInterestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
