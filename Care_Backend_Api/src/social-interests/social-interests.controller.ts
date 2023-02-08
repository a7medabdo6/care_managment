import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialInterestsService } from './social-interests.service';
import { CreateSocialInterestDto } from './dto/create-social-interest.dto';
import { UpdateSocialInterestDto } from './dto/update-social-interest.dto';

@Controller('social-interests')
export class SocialInterestsController {
  constructor(private readonly socialInterestsService: SocialInterestsService) {}

  @Post()
  create(@Body() createSocialInterestDto: CreateSocialInterestDto) {
    return this.socialInterestsService.create(createSocialInterestDto);
  }

  @Get()
  findAll() {
    return this.socialInterestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialInterestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialInterestDto: UpdateSocialInterestDto) {
    return this.socialInterestsService.update(+id, updateSocialInterestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialInterestsService.remove(+id);
  }
}
