import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/modules/shared/services/config/config.service';
import { Observable } from 'rxjs';
import { apiRequestsConstants } from 'src/app/modules/shared/constants/api-requests';
import { RequestUrlBuilder } from 'src/app/modules/shared/utils/request-url-builder';
import { Task } from '../../../model/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private http: HttpClient, private configService: ConfigService) {}

    public getAllTasks(): Observable<Array<Task>> {
        const userUrl = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.tasks;

        const pathParams = new Map();
        // pathParams.set('user', this.CURRENT_USER_NAME);

        const requestUrl = RequestUrlBuilder.buildUrl(userUrl, pathParams);

        return this.http.get<Array<Task>>(requestUrl);
    }
}
