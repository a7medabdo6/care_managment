import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
const jwt =require("jsonwebtoken")

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const { userId } = req.session;
    var decoded = jwt.verify(req.headers['token'], 'jsonwebtokensecret');
    
    if (decoded) {
      console.log(decoded,"decoded decoded")
      const user = await this.usersService.findOne(decoded.user);
      req.currentUser = user;
    }
    return next.handle();
  }
}
