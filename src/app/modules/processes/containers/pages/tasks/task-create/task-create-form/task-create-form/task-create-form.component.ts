import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../../../../model/task';
import { Param } from 'src/app/modules/processes/model/param';
import { CreateTaskData } from 'src/app/modules/processes/model/createTaskData';
import { ParamValue } from 'src/app/modules/processes/model/paramValue';

@Component({
    selector: 'app-task-create-form',
    templateUrl: './task-create-form.component.html',
    styleUrls: ['./task-create-form.component.scss']
})
export class TaskCreateFormComponent implements OnInit {
    @Input()
    task: Task;

    createTaskData: CreateTaskData;

    constructor() {}

    ngOnInit() {
        this.createTaskData.code = this.task.code;
    }

    onParamsChanged(params: Array<ParamValue>) {
        this.createTaskData.params = params;
    }
}
