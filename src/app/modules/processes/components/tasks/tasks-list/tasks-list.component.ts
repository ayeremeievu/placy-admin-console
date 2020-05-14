import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/tasks/task/task.service';
import { Task } from '../../../model/task';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
    tasks: Array<Task>;

    constructor(protected taskService: TaskService) {}

    ngOnInit() {
        this.taskService.getAllTasks().subscribe(tasks => {
            this.tasks = tasks;
        });
    }
}
