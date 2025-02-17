import { Test, TestingModule } from '@nestjs/testing';
import { TasksListService } from './tasks-list.service';

describe('TasksListService', () => {
  let service: TasksListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksListService],
    }).compile();

    service = module.get<TasksListService>(TasksListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
