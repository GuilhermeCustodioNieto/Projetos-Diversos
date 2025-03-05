import { Controller, Get, Param, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import exceptions from 'src/utils/ControllerExceptions.exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(

    private readonly usersService: UsersService) { }

  @Get()
  async findAll() {
    try {
      return await this.usersService.findAll();

    } catch (err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const idNumber = Number(id)

      const user = await this.usersService.findOne(idNumber);
      if (user == null) {
        return new NotFoundException(exceptions.notFoundError)
      }

      return user;
    } catch (err) {

      throw new InternalServerErrorException(exceptions.internalServerError)
    }

  }
}
