import { Component, OnInit } from '@angular/core';
import { Process } from '../../../../model/process';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProcessService } from 'src/app/modules/processes/services/processes/process/process.service';
import { map, flatMap } from 'rxjs/operators';

@Component({
    selector: 'app-process-create',
    templateUrl: './process-create.component.html',
    styleUrls: ['./process-create.component.scss']
})
export class ProcessCreateComponent implements OnInit {
    process$: Observable<Process>;

    constructor(private activatedRoute: ActivatedRoute, private processService: ProcessService) { }

    ngOnInit() {
        this.process$ = this.activatedRoute.paramMap.pipe(
            map(params => params.get('code')),
            flatMap(code => this.getProcessByCode(code))
        );
    }

    getProcessByCode(code: string): Observable<Process> {
        return this.processService.getProcessByCode(code);
    }
}
