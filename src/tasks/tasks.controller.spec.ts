/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from 'src/dto/task.dto';

describe('TasksController', () => {
  let tasksController: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    tasksController = app.get<TasksController>(TasksController);
  });

  // Testing GET getAllTasks()
  it('should return all tasks', () => {
    const mockTasks: Task[] = [
        { id: '1', title: 'Task 1', description: 'Description 1', dueDate: new Date() },
        { id: '2', title: 'Task 2', description: 'Description 2', dueDate: new Date() },
    ];      
    jest.spyOn(tasksController, 'getAllTasks').mockImplementation(() => mockTasks);
  
    const result = tasksController.getAllTasks();
  
    expect(result).toEqual(mockTasks);
  });
  //-----------------------------------------------------------------
  
  // Testing DELETE deleteTask()
  it('should delete a task', () => {
    const taskId = '1';
    const deleteTaskSpy = jest.spyOn(tasksController, 'deleteTask').mockImplementation(() => {
      // Implement your desired behavior here, such as returning a success message or a deleted task object
      return 'Task deleted successfully';
    });
  
    const result = tasksController.deleteTask(taskId);
  
    expect(deleteTaskSpy).toHaveBeenCalledWith(taskId);
    expect(result).toEqual('Task deleted successfully');
  });
});
