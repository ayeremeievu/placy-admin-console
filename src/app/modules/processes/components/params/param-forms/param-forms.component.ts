import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Param } from 'src/app/modules/processes/model/param';
import { ParamValue } from 'src/app/modules/processes/model/paramValue';
import { Task } from '../../../model/task';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-param-forms',
    templateUrl: './param-forms.component.html',
    styleUrls: ['./param-forms.component.scss']
})
export class ParamFormsComponent implements OnInit {
    @Input()
    task$: Observable<Task>;

    paramValues: Array<ParamValue>;

    @Output()
    valuesChanged: EventEmitter<Array<ParamValue>> = new EventEmitter<Array<ParamValue>>();

    constructor() { }

    ngOnInit() {
        this.paramValues = new Array<ParamValue>();

        this.task$.subscribe(task => {

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
