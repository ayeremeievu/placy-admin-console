import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Task } from 'src/app/modules/processes/model/task';
import { TaskService } from '../../../../services/tasks/task/task.service';

@Component({
    selector: 'app-task-create',
    templateUrl: './task-create.component.html',
    styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
    task$: Observable<Task>;

    constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService) {}

    ngOnInit() {
        this.task$ = this.activatedRoute.paramMap.pipe(
            map(params => params.get('code')),
            flatMap(code => this.getTaskByCode(code))
        );
    }

    getTaskByCode(code: string): Observable<Task> {
        return this.taskService.getTaskByCode(code);
    }
}
