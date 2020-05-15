import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../../../../model/task';

@Component({
    selector: 'app-task-create-form',
    templateUrl: './task-create-form.component.html',
    styleUrls: ['./task-create-form.component.scss']
})
export class TaskCreateFormComponent implements OnInit {
    @Input()
    task: Task;

    constructor() {}

    ngOnInit() {}
}
