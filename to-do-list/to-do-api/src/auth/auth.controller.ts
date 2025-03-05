import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterUserDto from './dto/register-auth.dto';
import exceptions from 'src/utils/ControllerExceptions.exceptions';
import { LoginUserDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post(`/signUp`)
  signUp(@Body() registerUserDto: RegisterUserDto) {
    try {
      return this.authService.register(registerUserDto);
    } catch (err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
  }

  @Post(`login`)
  signIn(@Body() loginAuthDto: LoginUserDto) {
    try {
      return this.authService.login(loginAuthDto)
    } catch (err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
  }

}
