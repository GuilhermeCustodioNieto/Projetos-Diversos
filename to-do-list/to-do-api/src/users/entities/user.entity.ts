import { TaskList } from 'src/tasks-list/entities/tasks-list.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => TaskList, (taskList) => taskList.user, {cascade: true})
    taskList: TaskList;
}
