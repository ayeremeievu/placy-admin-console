import { Component, OnInit } from '@angular/core';
import { Process } from '../../../model/process';
import { ProcessService } from '../../../services/processes/process/process.service';

@Component({
    selector: 'app-processes-list',
    templateUrl: './processes-list.component.html',
    styleUrls: ['./processes-list.component.scss']
})
export class ProcessesListComponent implements OnInit {
    processes: Array<Process>;

    constructor(protected processService: ProcessService) {}

    ngOnInit() {
        this.processService.getAllProcesses().subscribe(processes => {
            this.processes = processes;
        });
    }
}
