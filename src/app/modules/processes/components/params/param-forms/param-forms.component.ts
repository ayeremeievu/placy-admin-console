import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Param } from 'src/app/modules/processes/model/param';
import { ParamValue } from 'src/app/modules/processes/model/paramValue';

@Component({
    selector: 'app-param-forms',
    templateUrl: './param-forms.component.html',
    styleUrls: ['./param-forms.component.scss']
})
export class ParamFormsComponent implements OnInit {
    @Input()
    params: Array<Param>;

    @Input()
    paramValues: Array<ParamValue>;

    @Output()
    valuesChanged: EventEmitter<Array<ParamValue>> = new EventEmitter<Array<ParamValue>>();

    constructor() { }

    ngOnInit() {
        this.paramValues = new Array<ParamValue>();

        this.params.forEach(param => {
            let paramValue = new ParamValue();

            paramValue.code = param.code;

            this.paramValues.push(paramValue);
        });
    }

    onValueChanged(value: string, param: Param) {
        let paramValue = this.getValueByParamCode(param.code);

        paramValue.value = value;
    }

    getValueByParamCode(code: string): ParamValue {
        return this.paramValues.find(paramValue => paramValue.code == code);
    }
}
