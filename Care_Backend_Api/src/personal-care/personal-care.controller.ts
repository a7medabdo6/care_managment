import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalCareService } from './personal-care.service';
import { CreatePersonalCareDto } from './dto/create-personal-care.dto';
import { UpdatePersonalCareDto } from './dto/update-personal-care.dto';

@Controller('personal-care')
export class PersonalCareController {
  constructor(private readonly personalCareService: PersonalCareService) {}

  @Post()
  create(@Body() createPersonalCareDto: CreatePersonalCareDto) {
    return this.personalCareService.create(createPersonalCareDto);
  }

  @Get()
  findAll() {
    return this.personalCareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalCareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalCareDto: UpdatePersonalCareDto) {
    return this.personalCareService.update(+id, updatePersonalCareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalCareService.remove(+id);
  }
}
