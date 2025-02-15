import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {Repository} from 'typeorm'
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task = this.repository.create(createTaskDto);
    this.repository.save(task)
    return task
  
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    const task = this.repository.findOneBy({id})
    if(task == null){
      return null
    }

    return task
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.repository.findOneBy({id})
    if(task !== null) {
      this.repository.merge(task, updateTaskDto)
      return this.repository.save(task)
    }

    return null
  }

  async remove(id: number) {
    const task = await this.repository.findOneBy({id})
    if(task !== null) {
      this.repository.delete(task)
    }
  }
}
