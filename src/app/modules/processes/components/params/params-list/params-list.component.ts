import { Component, OnInit, Inject, Input } from '@angular/core';
import { Param } from '../../../model/param';

@Component({
    selector: 'app-params-list',
    templateUrl: './params-list.component.html',
    styleUrls: ['./params-list.component.scss']
})
export class ParamsListComponent implements OnInit {
    @Input()
    params: Array<Param>;

    constructor() {}

    ngOnInit() {}
}
