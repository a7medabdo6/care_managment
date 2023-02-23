import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanModule } from 'src/plan/plan.module';
import { Note } from './entities/note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note]), PlanModule],

  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
