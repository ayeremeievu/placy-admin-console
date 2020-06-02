import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/modules/shared/services/config/config.service';
import { Observable } from 'rxjs';
import { apiRequestsConstants } from 'src/app/modules/shared/constants/api-requests';
import { RequestUrlBuilder } from 'src/app/modules/shared/utils/request-url-builder';
import { Task } from '../../../model/task';
import { CreateTaskData } from '../../../model/createTaskData';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient, private configService: ConfigService) { }

    public getAllTasks(): Observable<Array<Task>> {
        const tasksUrl = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.tasks;

        const pathParams = new Map();

        const requestUrl = RequestUrlBuilder.buildUrl(tasksUrl, pathParams);

        return this.http.get<Array<Task>>(requestUrl);
    }

    public getTaskByCode(code: string): Observable<Task> {
        const taskUrl = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.task;

        const pathParams = new Map();

        pathParams.set('code', code);

        const requestUrl = RequestUrlBuilder.buildUrl(taskUrl, pathParams);

        return this.http.get<Task>(requestUrl);
    }

    runTask(createTaskData: CreateTaskData) {
        const tasksUrl = this.configService.getCoreWebServicesUrl() + apiRequestsConstants.taskInstance

        this.http.post<any>(tasksUrl, createTaskData).subscribe(response => console.log(response));
    }
}
