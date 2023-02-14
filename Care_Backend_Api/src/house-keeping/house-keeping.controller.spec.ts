import { Test, TestingModule } from '@nestjs/testing';
import { HouseKeepingController } from './house-keeping.controller';
import { HouseKeepingService } from './house-keeping.service';

describe('HouseKeepingController', () => {
  let controller: HouseKeepingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseKeepingController],
      providers: [HouseKeepingService],
    }).compile();

    controller = module.get<HouseKeepingController>(HouseKeepingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
