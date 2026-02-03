import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: UserDT;
  getHello(): string {
    return 'Hello World!';
  }
}
