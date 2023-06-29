import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async registerUser(createUserDto: CreateUserDto): Promise<void> {
    const newUser: User = {
      id: Date.now().toString(),
      username: createUserDto.username,
      password: createUserDto.password,
    };

    this.users.push(newUser);
  }

  async getUserById(userId: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === userId);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

interface User {
  id: string;
  username: string;
  password: string;
}
