import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import { ActualState } from '../enums/ActualState.enum';
import { Priority } from '../enums/Priority.enum';

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

 
}
