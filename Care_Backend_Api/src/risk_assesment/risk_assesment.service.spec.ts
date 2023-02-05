import { Test, TestingModule } from '@nestjs/testing';
import { RiskAssesmentService } from './risk_assesment.service';

describe('RiskAssesmentService', () => {
  let service: RiskAssesmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiskAssesmentService],
    }).compile();

    service = module.get<RiskAssesmentService>(RiskAssesmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
