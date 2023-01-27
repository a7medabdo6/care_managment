import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  async findAll() {
    const users = await this.repo.find({where:{role:2},relations:{worker:true}});

    return users;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('user not found5');
    }
    return user;
  }
  async findOneByEmail(email: string) {
    const user = await this.repo.findOne({
      where: { email },
      relations: { worker: true },
    });

    return user;
  }
  async update(id: number, updateUser: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, updateUser);
    return this.repo.save(user);
  }
  async updateAfterProfile(userId: number, workerId: number) {
    const user = await this.findOne(userId);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, { workerId });
    return this.repo.save(user);
  }
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
