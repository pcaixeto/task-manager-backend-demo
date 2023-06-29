import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  controllers: [UsersController, TasksController],
  providers: [UsersService, TasksService],
})
export class AppModule {}
