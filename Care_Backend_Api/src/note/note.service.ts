import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from 'src/plan/entities/plan.entity';
import { PlanService } from 'src/plan/plan.service';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note) private repo: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto, plan: Plan) {
    const Note = await this.repo.create(createNoteDto);
    Note.plan = plan;
    return this.repo.save(Note);
  }

  async findAll() {
    const doctors = await this.repo.find({});

    return doctors;
  }

  async findOne(id: number) {
    const doctor = await this.repo.findOne({
      where: { id },
      relations: { plan: true },
    });
    return doctor;
  }

  update(id: number, updateDoctorDto: UpdateNoteDto) {
    return `This action updates a #${id} Note`;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('doctor not found');
    }
    return this.repo.remove(user);
  }
}
