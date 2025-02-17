import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskList {
    @PrimaryGeneratedColumn()
    id: Number

    @OneToMany(() => Task, (task) => task.taskList,  {cascade: true})
    tasks: Task[];

    @OneToOne(() => User, (user) => user.taskList, {onDelete: 'CASCADE'})
    user: User;



}
