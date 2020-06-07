import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Process } from 'src/app/modules/processes/model/process';
import { CreateProcessData } from 'src/app/modules/processes/model/createProcessData';
import { ProcessService } from 'src/app/modules/processes/services/processes/process/process.service';
import { AlertService } from 'src/app/modules/shared/components/alert/alert.service';
import { CreateTaskData } from 'src/app/modules/processes/model/createTaskData';
import { ParamValue } from 'src/app/modules/processes/model/paramValue';

@Component({
    selector: 'app-process-create-form',
    templateUrl: './process-create-form.component.html',
    styleUrls: ['./process-create-form.component.scss']
})
export class ProcessCreateFormComponent implements OnInit {

    @Input()
    process$: Observable<Process>;

    process: Process;

    createProcessData: CreateProcessData;

    alertOptions = {
        autoClose: false,
        keepAfterRouteChange: false,
        id: 'create-process-response'
    }

    constructor(protected processService: ProcessService, protected alertService: AlertService) { }

    ngOnInit() {
        this.createProcessData = new CreateProcessData();

        this.process$.subscribe(process => {
            this.process = process;

            this.createProcessData.processCode = process.code;
        })
    }

    onParamsChanged(params: Array<ParamValue>) {
        this.createProcessData.paramValues = params;
    }

    runProcess() {
        this.processService.runProcess(this.createProcessData).subscribe(
            success => this.alertService.success("The process was created successfull", this.alertOptions),
            error => this.alertService.error(
                "Error occured during process creation : '" + error.error.message + "'. Status: " + error.status,
                this.alertOptions)
        );
    }

}
