import { Test, TestingModule } from '@nestjs/testing';
import { PersonalCareController } from './personal-care.controller';
import { PersonalCareService } from './personal-care.service';

describe('PersonalCareController', () => {
  let controller: PersonalCareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalCareController],
      providers: [PersonalCareService],
    }).compile();

    controller = module.get<PersonalCareController>(PersonalCareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
