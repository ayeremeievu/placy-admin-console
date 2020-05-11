import { Injectable } from '@angular/core';
import { generalConfig } from '../../constants/general-config';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor() {}

    public getEnvironment() {
        return environment;
    }

    public getHost() {
        return environment.apiHost;
    }

    public getApiUrlPrevix() {
        return generalConfig.apiUrl;
    }

    public getApiUrl() {
        return this.getHost() + this.getApiUrlPrevix();
    }
}
