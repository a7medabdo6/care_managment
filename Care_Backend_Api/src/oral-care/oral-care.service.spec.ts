import { Test, TestingModule } from '@nestjs/testing';
import { OralCareService } from './oral-care.service';

describe('OralCareService', () => {
  let service: OralCareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OralCareService],
    }).compile();

    service = module.get<OralCareService>(OralCareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
