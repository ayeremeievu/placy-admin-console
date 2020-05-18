import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Param } from '../../../model/param';

@Component({
    selector: 'app-param-input',
    templateUrl: './param-input.component.html',
    styleUrls: ['./param-input.component.scss']
})
export class ParamInputComponent implements OnInit {
    @Input()
    param: Param;

    @Output()
    valueChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    onValueChanged(value) {
        this.valueChanged.emit(value);
    }
}
