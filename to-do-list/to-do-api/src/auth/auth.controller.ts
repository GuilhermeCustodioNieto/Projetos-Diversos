import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterUserDto from './dto/register-auth.dto';
import exceptions from 'src/utils/ControllerExceptions';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  signUp(@Body() registerUserDto: RegisterUserDto) {
    try {
      return this.authService.register(registerUserDto);
    } catch (err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
  }

}
