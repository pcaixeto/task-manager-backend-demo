/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, CreateTaskDto } from '../dto/task.dto';
import { UpdateTaskDto } from '../dto/updateTask.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: Date.now().toString(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      dueDate: createTaskDto.dueDate,
    };

    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(taskId: string, updateTaskDto: UpdateTaskDto): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
  
    if (taskIndex === -1) {
      // If the task with the provided taskId does not exist, you can handle the error accordingly
      throw new NotFoundException(`Task with ID '${taskId}' not found`);
    }
  
    const updatedTask: Task = {
      ...this.tasks[taskIndex],
      ...updateTaskDto,
    };
  
    this.tasks[taskIndex] = updatedTask;
  
    return updatedTask;
  }
  
  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
