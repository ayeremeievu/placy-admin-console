import { Component, OnInit, Input } from '@angular/core';
import { Process } from '../../../model/process';

@Component({
    selector: 'app-process-item',
    templateUrl: './process-item.component.html',
    styleUrls: ['./process-item.component.scss']
})
export class ProcessItemComponent implements OnInit {
    @Input()
    process: Process;

    constructor() {}

    ngOnInit() {}
}
