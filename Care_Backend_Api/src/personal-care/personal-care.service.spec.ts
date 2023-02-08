import { Test, TestingModule } from '@nestjs/testing';
import { PersonalCareService } from './personal-care.service';

describe('PersonalCareService', () => {
  let service: PersonalCareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalCareService],
    }).compile();

    service = module.get<PersonalCareService>(PersonalCareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
