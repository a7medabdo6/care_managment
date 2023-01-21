import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(createUserDto: CreateUserDto) {
    const { email, password, role, createBy, username } = createUserDto;
    const users = await this.usersService.findOneByEmail(email);
    if (users) {
      throw new BadRequestException('email in use');
    }
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    const user = await this.usersService.create({
      ...createUserDto,
      password: result,
    });
    return user;
  }
  async signin(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException('user Not Fpund');
    }
    const [salt, stroreHash] = user.password.split('.');
    console.log(salt);
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (stroreHash !== hash.toString('hex')) {
      throw new BadRequestException('Wrong password');
    }
    return user;
  }
}
