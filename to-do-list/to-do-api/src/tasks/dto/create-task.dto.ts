import { MinLength } from 'class-validator';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ActualState } from '../enums/ActualState.enum';
import { Priority } from '../enums/Priority.enum';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    dueDate: Date;

    @IsEnum(ActualState)
    actualState: ActualState

    @IsEnum(Priority)
    priority: Priority

    @IsNumber()
    taskListId: Number;

}
