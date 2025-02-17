import { Test, TestingModule } from '@nestjs/testing';
import { TasksListController } from './tasks-list.controller';
import { TasksListService } from './tasks-list.service';

describe('TasksListController', () => {
  let controller: TasksListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksListController],
      providers: [TasksListService],
    }).compile();

    controller = module.get<TasksListController>(TasksListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
