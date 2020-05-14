import { Component, OnInit, Input } from '@angular/core';
import { Param } from '../../../model/param';

@Component({
    selector: 'app-param',
    templateUrl: './param.component.html',
    styleUrls: ['./param.component.scss']
})
export class ParamComponent implements OnInit {
    @Input()
    param: Param;

    constructor() {}

    ngOnInit() {}
}
