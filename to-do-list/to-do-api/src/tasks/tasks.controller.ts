import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import exceptions from 'src/utils/ControllerExceptions.exceptions';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    try {
      const task = await this.tasksService.create(createTaskDto)
      
      return task
    } catch(err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
  }

  @Get()
  async findAll() {
    try{
      return await this.tasksService.findAll();
    } catch(err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
    
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      const task = await this.tasksService.findOne(+id);
      if(task == null){
        throw new NotFoundException(exceptions.notFoundError)
        }
      

      return task
    } catch(err) {
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    try{
      const task = await this.tasksService.update(+id, updateTaskDto)
      if(task == null){
        throw new NotFoundException(exceptions.notFoundError)
      }

      return task

    } catch(err){
      throw new InternalServerErrorException(exceptions.internalServerError)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      const task = await this.tasksService.remove(+id);
      if(task == null){
        throw new NotFoundException(exceptions.notFoundError)
      }
      return task
      } catch{
        throw new InternalServerErrorException(exceptions.internalServerError)
      }
    
  }
}

// try{
      
// } catch(
//   return this.messageObjError
// )