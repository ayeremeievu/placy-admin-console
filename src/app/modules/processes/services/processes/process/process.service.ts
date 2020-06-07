import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/modules/shared/services/config/config.service';
import { Observable } from 'rxjs';
import { apiRequestsConstants } from 'src/app/modules/shared/constants/api-requests';
import { RequestUrlBuilder } from 'src/app/modules/shared/utils/request-url-builder';
import { Process } from '../../../model/process';
import { CreateProcessData } from '../../../model/createProcessData';
import { ProcessInstance } from '../../../model/processInstance';

@Injectable({
    providedIn: 'root'
})
export class ProcessService {
    constructor(private http: HttpClient, private configService: ConfigService) { }

    public getAllProcesses(): Observable<Array<Process>> {
        const userUrl = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.processes;

        const pathParams = new Map();

        const requestUrl = RequestUrlBuilder.buildUrl(userUrl, pathParams);

        return this.http.get<Array<Process>>(requestUrl);
    }

    public getProcessByCode(code: string): Observable<Process> {
        const processUrl = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.process;

        const pathParams = new Map();

        pathParams.set('code', code);

        const requestUrl = RequestUrlBuilder.buildUrl(processUrl, pathParams);

        return this.http.get<Process>(requestUrl);
    }

    runProcess(createTaskData: CreateProcessData): Observable<any> {
        const processesUrl = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.processInstances

        return this.http.post<any>(processesUrl, createTaskData);
    }

    public getProcessInstances(): Observable<ProcessInstance[]> {
        const url = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.processInstances;

        return this.http.get<ProcessInstance[]>(url);
    }
}
