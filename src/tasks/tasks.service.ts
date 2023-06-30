/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, CreateTaskDto } from '../dto/task.dto';

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

  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
