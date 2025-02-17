import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({id})
  }

  async update(id: number, updateUserDto: UpdateUserDto){
    const user = await this.userRepository.findOneBy({id})
    if(user !== null) {
      this.userRepository.merge(user, updateUserDto);
      this.userRepository.save(user)
    }

    return user;
  }
}
