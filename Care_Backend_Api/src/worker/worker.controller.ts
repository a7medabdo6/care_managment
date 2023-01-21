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
@Controller('worker')
@UseInterceptors(CurrentUserInterceptor)
@UseGuards(AuthGuard)
@Serialize(WorkerDto)
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }

  @Get()
  findAll() {
    return this.workerService.findAll();
  }
  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'training', maxCount: 1 },
        { name: 'Application', maxCount: 1 },
      ],
      {
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
      },
    ),
  )
  async uploadFile(
    @Body() body: CreateWorkerDto,

    @UploadedFiles()
    files: {
      training?: Express.Multer.File[];
      Application?: Express.Multer.File[];
    },
    @Req() req: any,
  ) {
    const isEmpty = Object.keys(files).length === 0;
    if (isEmpty || !files || req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    let training = '';
    // for (let index = 0; index < files.length; index++) {
    //   console.log('photos', files[index].filename);

    //   training = training.concat(files[index].filename, ',');
    // }
    let Application = 'test';
    // for (let index = 0; index < files.length; index++) {
    //   console.log('photos', files[index].filename);

    //   Application = Application.concat(files[index].filename, ',');
    // }
    console.log(files, 'test');
    const product = await this.workerService.create({
      ...body,
      training: files?.training?.[0]?.filename,
      Application: files?.Application?.[0]?.filename,
    });
    throw new HttpException('CREATED', HttpStatus.CREATED);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workerService.update(+id, updateWorkerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workerService.remove(+id);
  }
}
