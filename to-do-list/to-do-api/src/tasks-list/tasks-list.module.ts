import { Module } from '@nestjs/common';
import { TasksListService } from './tasks-list.service';
import { TasksListController } from './tasks-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskList } from './entities/tasks-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskList])],
  controllers: [TasksListController],
  providers: [TasksListService],
})
export class TasksListModule {}
