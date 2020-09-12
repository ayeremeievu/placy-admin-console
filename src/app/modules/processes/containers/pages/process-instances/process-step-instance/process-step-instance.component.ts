import { Component, Input, OnInit } from '@angular/core';
import { ProcessStepInstance } from 'src/app/modules/processes/model/processStepInstance';

@Component({
    selector: 'app-process-step-instance',
    templateUrl: './process-step-instance.component.html',
    styleUrls: ['./process-step-instance.component.scss']
})
export class ProcessStepInstanceComponent implements OnInit {
    @Input()
    processStepInstance: ProcessStepInstance;

    constructor() { }

    ngOnInit() {
    }

}
