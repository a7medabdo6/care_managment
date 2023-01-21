import {
  Controller,
  UseGuards,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ReportDto } from './dto/report.dto';

@Controller('reports')
@UseInterceptors(CurrentUserInterceptor)
@UseGuards(AuthGuard)
@Serialize(ReportDto)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  create(
    @Body() createReportDto: CreateReportDto,
    @CurrentUser() currentUser: User,
  ) {
    return this.reportsService.create(createReportDto, currentUser);
  }

  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.reportsService.update(+id, updateReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportsService.remove(+id);
  }
}
