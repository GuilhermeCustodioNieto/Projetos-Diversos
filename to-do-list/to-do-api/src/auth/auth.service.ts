import { LoginUserDto } from './dto/update-auth.dto';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-auth.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';

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
      throw new BadRequestException(`The passwords does not match`)

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userObj = {
      email: email,
      username: username,
      password: hashedPassword
    }

    const user = await this.userRepository.create(userObj);

    await this.userRepository.save(user)

    const payload = await this.JwtService.signAsync({ userId: user.id, username: user.username })

    return { token: payload }
  }

  async login(loginUserDto: LoginUserDto): Promise<{ token: string }> {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOneBy({ email })

    if (user == null) {
      throw new BadRequestException(`The user does not exists`)
    }

    const passwordEqual = await bcrypt.compare(password, user.password)
    if (!passwordEqual) {
      throw new BadRequestException('The password does not match')
    }

    const payload = await this.JwtService.signAsync({ id: user.id, username: user.username })

    return { token: payload }
  }
}
