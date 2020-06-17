import { Component, OnInit, Input } from '@angular/core';
import { TaskInstance } from '../../../../model/taskInstance';

@Component({
    selector: 'app-task-instance-item',
    templateUrl: './task-instance-item.component.html',
    styleUrls: ['./task-instance-item.component.scss']
})
export class TaskInstanceItemComponent implements OnInit {
    @Input()
    taskInstance: TaskInstance

    constructor() { }

    ngOnInit() {
    }

}
