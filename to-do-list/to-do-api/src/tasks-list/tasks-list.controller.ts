import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException } from '@nestjs/common';
import { TasksListService } from './tasks-list.service';
import exceptions from 'src/utils/ControllerExceptions';

@Controller('tasks-list')
export class TasksListController {
  constructor(private readonly tasksListService: TasksListService) { }
  @Get()
  async findAll() {
    try {
      return await this.tasksListService.findAll();
    } catch (err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.tasksListService.findOne(+id);
    } catch (err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }

  }
}
