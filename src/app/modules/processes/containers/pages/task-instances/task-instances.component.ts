import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/tasks/task/task.service';
import { Observable } from 'rxjs';
import { TaskInstance } from '../../../model/taskInstance';

@Component({
    selector: 'app-task-instances',
    templateUrl: './task-instances.component.html',
    styleUrls: ['./task-instances.component.scss']
})
export class TaskInstancesComponent implements OnInit {
    tasksInstances$: Observable<TaskInstance[]>

    constructor(protected taskService: TaskService) { }

    ngOnInit() {
        this.tasksInstances$ = this.taskService.getTaskInstances();
    }

}
