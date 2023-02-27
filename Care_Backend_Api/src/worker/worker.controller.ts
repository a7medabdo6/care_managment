import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  UploadedFiles,
  Req,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileFilter } from 'src/utils/file-validator';
import { extname } from 'path';
import { WorkerDto } from './dto/worker.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UsersService } from 'src/users/users.service';
import { CurrentUser } from 'src/decorators/current-user.decorator';
@Controller('worker')
@UseInterceptors(CurrentUserInterceptor)
@UseGuards(AuthGuard)
// @Serialize(WorkerDto)
export class WorkerController {
  constructor(
    private readonly workerService: WorkerService,
    private readonly usersService: UsersService,
  ) {}

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'Application', maxCount: 1 }], {
      fileFilter: FileFilter,
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadFile(
    @Body() body: CreateWorkerDto,

    @UploadedFiles()
    files: {
      Application?: Express.Multer.File[];
    },
    @Req() req: any,
    @CurrentUser() user: any,
  ) {
    const isEmpty = Object.keys(files).length === 0;
    if (isEmpty || !files || req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    const User = await this.usersService.findOneByEmail(body.user_email);
    const product = await this.workerService.create(
      {
        ...body,
        Application: files?.Application?.[0]?.filename,
      },
      User,
    );
    throw new HttpException('CREATED', HttpStatus.CREATED);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workerService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
  //   return this.workerService.update(+id, updateWorkerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.workerService.remove(+id);
  // }
}
