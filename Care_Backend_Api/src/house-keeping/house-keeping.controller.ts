import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HouseKeepingService } from './house-keeping.service';
import { CreateHouseKeepingDto } from './dto/create-house-keeping.dto';
import { UpdateHouseKeepingDto } from './dto/update-house-keeping.dto';

@Controller('house-keeping')
export class HouseKeepingController {
  constructor(private readonly houseKeepingService: HouseKeepingService) {}

  @Post()
  create(@Body() createHouseKeepingDto: CreateHouseKeepingDto) {
    return this.houseKeepingService.create(createHouseKeepingDto);
  }

  @Get()
  findAll() {
    return this.houseKeepingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.houseKeepingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHouseKeepingDto: UpdateHouseKeepingDto) {
    return this.houseKeepingService.update(+id, updateHouseKeepingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.houseKeepingService.remove(+id);
  }
}
