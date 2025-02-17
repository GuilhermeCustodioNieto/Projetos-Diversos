import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { ActualState } from '../enums/ActualState.enum';
import { Priority } from '../enums/Priority.enum';
import { TaskList } from 'src/tasks-list/entities/tasks-list.entity';

@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    dueDate: Date;

    @Column({type: 'enum', enum: ActualState, default: ActualState.IN_PROGRESS})
    actualState: ActualState;

    @Column({type: 'enum', enum: Priority, default: Priority.NORMAL})
    priority: Priority;

    @ManyToOne(() => TaskList, (taskList) => taskList.tasks, {onDelete: 'CASCADE'})
    taskList: TaskList
 
}
