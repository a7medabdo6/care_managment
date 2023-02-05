import { Test, TestingModule } from '@nestjs/testing';
import { RiskAssesmentController } from './risk_assesment.controller';
import { RiskAssesmentService } from './risk_assesment.service';

describe('RiskAssesmentController', () => {
  let controller: RiskAssesmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiskAssesmentController],
      providers: [RiskAssesmentService],
    }).compile();

    controller = module.get<RiskAssesmentController>(RiskAssesmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
