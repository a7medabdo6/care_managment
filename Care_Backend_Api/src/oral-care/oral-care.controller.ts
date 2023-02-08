import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OralCareService } from './oral-care.service';
import { CreateOralCareDto } from './dto/create-oral-care.dto';
import { UpdateOralCareDto } from './dto/update-oral-care.dto';

@Controller('oral-care')
export class OralCareController {
  constructor(private readonly oralCareService: OralCareService) {}

  @Post()
  create(@Body() createOralCareDto: CreateOralCareDto) {
    return this.oralCareService.create(createOralCareDto);
  }

  @Get()
  findAll() {
    return this.oralCareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oralCareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOralCareDto: UpdateOralCareDto) {
    return this.oralCareService.update(+id, updateOralCareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oralCareService.remove(+id);
  }
}
