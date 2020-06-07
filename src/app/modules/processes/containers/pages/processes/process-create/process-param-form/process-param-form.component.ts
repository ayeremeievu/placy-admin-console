import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Process } from '../../../../../model/process';
import { CreateProcessData } from '../../../../../model/createProcessData';
import { ProcessService } from '../../../../../services/processes/process/process.service';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/modules/shared/components/alert/alert.service';
import { CreateTaskData } from 'src/app/modules/processes/model/createTaskData';
import { ParamValue } from 'src/app/modules/processes/model/paramValue';
import { Param } from 'src/app/modules/processes/model/param';

@Component({
    selector: 'app-process-param-form',
    templateUrl: './process-param-form.component.html',
    styleUrls: ['./process-param-form.component.scss']
})
export class ProcessParamFormComponent implements OnInit {

    @Input()
    process$: Observable<Process>;

    paramValues: Array<ParamValue>;

    @Output()
    valuesChanged: EventEmitter<Array<ParamValue>> = new EventEmitter<Array<ParamValue>>();

    constructor() { }

    ngOnInit() {
        this.paramValues = new Array<ParamValue>();

        this.process$.subscribe(task => {

            if (task) {
                task.params.forEach(param => {
                    let paramValue = new ParamValue();

                    paramValue.code = param.code;

                    this.paramValues.push(paramValue);
                });
            }
        })
    }

    onValueChanged(newParamValue: string, param: Param) {
        let paramValue = this.getValueByParamCode(param.code);

        paramValue.value = newParamValue;

        this.valuesChanged.emit(this.paramValues);
    }

    getValueByParamCode(code: string): ParamValue {
        return this.paramValues.find(paramValue => paramValue.code == code);
    }

}
