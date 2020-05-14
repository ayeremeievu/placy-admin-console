import { Component, OnInit, Inject, Input } from '@angular/core';
import { Task } from '../../../model/task';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
    @Input()
    task: Task;

    constructor() {}

    ngOnInit() {}
}
