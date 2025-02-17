import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TaskList } from './entities/tasks-list.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksListService {
  constructor(
    @InjectRepository(TaskList)
    private readonly repository: Repository<TaskList>
  ) {}

  async create() {
    const taskList =  this.repository.create();
    return await this.repository.save(taskList)

  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }
}
