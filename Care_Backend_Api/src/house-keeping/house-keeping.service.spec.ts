import { Test, TestingModule } from '@nestjs/testing';
import { HouseKeepingService } from './house-keeping.service';

describe('HouseKeepingService', () => {
  let service: HouseKeepingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseKeepingService],
    }).compile();

    service = module.get<HouseKeepingService>(HouseKeepingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
