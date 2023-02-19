import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { BadRequestException, HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Req, UploadedFiles, UseInterceptors } from '@nestjs/common/decorators';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { FileFilter } from 'src/utils/file-validator';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PlanService } from 'src/plan/plan.service';

@Controller('note')
export class NoteController {
  constructor(
    private readonly noteService: NoteService,
    private readonly planService: PlanService,
  ) {}

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'doc', maxCount: 1 }], {
      // fileFilter: FileFilter,
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
    @Body() body: CreateNoteDto,

    @UploadedFiles()
    files: {
      doc?: Express.Multer.File[];
    },
    @Req() req: any,
  ) {
    // const isEmpty = Object.keys(files).length === 0;
    // if (isEmpty || !files || req.fileValidationError) {
    //   throw new BadRequestException(req.fileValidationError);
    // }
    const Plan = await this.planService.findOne(body.planId);
    const note = await this.noteService.create(
      {
        ...body,
        doc: files?.doc?.[0]?.filename,
      },
      Plan,
    );
    throw new HttpException('CREATED', HttpStatus.CREATED);
  }

  @Get()
  findAll() {
    return this.noteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}
