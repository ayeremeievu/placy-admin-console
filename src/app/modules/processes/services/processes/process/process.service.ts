import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/modules/shared/services/config/config.service';
import { Observable } from 'rxjs';
import { apiRequestsConstants } from 'src/app/modules/shared/constants/api-requests';
import { RequestUrlBuilder } from 'src/app/modules/shared/utils/request-url-builder';
import { Process } from '../../../model/process';

@Injectable({
    providedIn: 'root'
})
export class ProcessService {
    constructor(private http: HttpClient, private configService: ConfigService) {}

    public getAllProcesses(): Observable<Array<Process>> {
        const userUrl = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.processes;

        const pathParams = new Map();

        const requestUrl = RequestUrlBuilder.buildUrl(userUrl, pathParams);

        return this.http.get<Array<Process>>(requestUrl);
    }
}
