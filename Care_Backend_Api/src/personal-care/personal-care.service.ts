import { Injectable } from '@nestjs/common';
import { CreatePersonalCareDto } from './dto/create-personal-care.dto';
import { UpdatePersonalCareDto } from './dto/update-personal-care.dto';

@Injectable()
export class PersonalCareService {
  create(createPersonalCareDto: CreatePersonalCareDto) {
    return 'This action adds a new personalCare';
  }

  findAll() {
    return `This action returns all personalCare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalCare`;
  }

  update(id: number, updatePersonalCareDto: UpdatePersonalCareDto) {
    return `This action updates a #${id} personalCare`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalCare`;
  }
}
