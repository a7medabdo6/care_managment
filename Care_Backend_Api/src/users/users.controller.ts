import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Session,
  UseInterceptors,
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { ApiProperty } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { AuthService } from 'src/auth/auth.service';
import { get } from 'http';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from './entities/user.entity';
import { CurrentUserInterceptor } from '../users/interceptors/current-user.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
@Controller('users')
 @Serialize(UserDto)

export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoami(@CurrentUser() user: unknown) {
    return user;
  }
  // @Get('/trans')
  // async getHello(@I18n() i18n: I18nContext) {
  //   return await i18n.t('test.HELLO');
  // }
  @Post('/signup')
  async signup(@Body() createUserDto: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(createUserDto);
   // session.userId = user.id;
    return {user};
  }
  @Get('/my-profile')
  @UseInterceptors(CurrentUserInterceptor)
  @UseGuards(AuthGuard)
  async profile(@CurrentUser() user: any) {
    const userdata = await this.usersService.findOneByEmail(user.email);
    return userdata;
  }
  @Post('/signin')
  async signin(@Body() createUserDto: any, @Session() session: any) {
    const user = await this.authService.signin(createUserDto);
    return user;
  }
  @Post('/signout')
  async signout(@Session() session: any) {
    session.userId = null;
    return 'ok';
  }
  /*************************************************** */
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
