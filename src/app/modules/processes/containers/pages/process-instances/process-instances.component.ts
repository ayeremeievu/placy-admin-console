import { Component, OnInit } from '@angular/core';
import { ProcessService } from 'src/app/modules/processes/services/processes/process/process.service';
import { Observable } from 'rxjs';
import { ProcessInstance } from '../../../model/processInstance';

@Component({
    selector: 'app-process-instances',
    templateUrl: './process-instances.component.html',
    styleUrls: ['./process-instances.component.scss']
})
export class ProcessInstancesComponent implements OnInit {
    processInstances$: Observable<ProcessInstance[]>

    constructor(protected processService: ProcessService) { }

    ngOnInit() {
        this.processInstances$ = this.processService.getProcessInstances();
    }

}
