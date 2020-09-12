import { Component, Input, OnInit } from '@angular/core';
import { ProcessInstance } from 'src/app/modules/processes/model/processInstance';

@Component({
    selector: 'app-process-instance-item',
    templateUrl: './process-instance-item.component.html',
    styleUrls: ['./process-instance-item.component.scss']
})
export class ProcessInstanceItemComponent implements OnInit {
    @Input()
    processInstance : ProcessInstance

    constructor() { }

    ngOnInit() {
        console.log(this.processInstance);
    }

}
