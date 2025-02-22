import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-auth.dto';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private JwtService: JwtService
  ) { }

  async register(registerUserDto: RegisterUserDto): Promise<{ token: string }> {
    const { email, username, password, secondPassword } = registerUserDto

    if (password !== secondPassword) {


    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userObj = {
      email: email,
      username: username,
      password: hashedPassword
    }

    const user = await this.userRepository.create(userObj);

    await this.userRepository.save(user)


    const payload = await this.JwtService.sign({ userId: user.id, username: user.username })
    return { token: payload }
  }
}
