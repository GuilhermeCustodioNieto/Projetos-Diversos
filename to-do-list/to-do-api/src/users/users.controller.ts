import { Controller, Get, Param, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import exceptions from 'src/utils/ControllerExceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User)
    private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    try{
      return this.usersService.findAll();
    } catch(err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try{
      const user = this.usersService.findOne(+id);
      if(user == null) {
        return new NotFoundException(exceptions.notFoundError)
      }

      return user;
    } catch(err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
    
  }
}
