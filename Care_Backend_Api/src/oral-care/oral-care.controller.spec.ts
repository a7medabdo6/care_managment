import { Test, TestingModule } from '@nestjs/testing';
import { OralCareController } from './oral-care.controller';
import { OralCareService } from './oral-care.service';

describe('OralCareController', () => {
  let controller: OralCareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OralCareController],
      providers: [OralCareService],
    }).compile();

    controller = module.get<OralCareController>(OralCareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
