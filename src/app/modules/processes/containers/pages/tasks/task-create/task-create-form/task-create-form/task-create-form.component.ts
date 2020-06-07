import { Component, OnInit, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Task } from '../../../../../../model/task';
import { Param } from 'src/app/modules/processes/model/param';
import { CreateTaskData } from 'src/app/modules/processes/model/createTaskData';
import { ParamValue } from 'src/app/modules/processes/model/paramValue';
import { TaskService } from '../../../../../../services/tasks/task/task.service';
import { AlertService } from '../../../../../../../shared/components/alert/alert.service';

@Component({
    selector: 'app-task-create-form',
    templateUrl: './task-create-form.component.html',
    styleUrls: ['./task-create-form.component.scss']
})
export class TaskCreateFormComponent implements OnInit {
    @Input()
    task$: Observable<Task>;

    task: Task;

    createTaskData: CreateTaskData;

    alertOptions = {
        autoClose: false,
        keepAfterRouteChange: false,
        id: 'create-task-response'
    }

    constructor(protected taskService: TaskService, protected alertService: AlertService) { }

    ngOnInit() {
        this.createTaskData = new CreateTaskData();

        this.task$.subscribe(task => {
            this.task = task;

            this.createTaskData.code = task.code;
        })
    }

    onParamsChanged(params: Array<ParamValue>) {
        this.createTaskData.paramValues = params;
    }

    runTask() {
        this.taskService.runTask(this.createTaskData).subscribe(
            success => this.alertService.success("The task was created successfull", this.alertOptions),
            error => this.alertService.error(
                "Error occured during task creation : '" + error.error.message + "'. Status: " + error.status,
                this.alertOptions)
        );
    }
}
