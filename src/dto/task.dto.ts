/* eslint-disable prettier/prettier */
export class CreateTaskDto {
    title: string;
    description: string;
    dueDate: Date;
}

export class UpdateTaskDto {
    title?: string;
    description?: string;
    dueDate?: Date;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
}
