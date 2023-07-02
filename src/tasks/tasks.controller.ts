/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from '../dto/task.dto';
import { UpdateTaskDto } from 'src/dto/updateTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('tasks-list')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post('register')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Put(':id')
  updateTask(@Param('id') taskId: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(taskId, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') taskId: string) {
    return this.tasksService.deleteTask(taskId);
  }
}
