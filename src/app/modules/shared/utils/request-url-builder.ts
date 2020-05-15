import { stringify } from 'querystring';

export class RequestUrlBuilder {
    static buildUrl(uri: string, pathParams: Map<string, string>): string {
        let result = uri;

        pathParams.forEach((value, name) => {
            result = result.replace(`{${name}}`, value);
        });

        return result;
    }

    static buildUrlByArray(uri: string, pathParams: Array<Param>): string {
        return RequestUrlBuilder.buildUrl(uri, this.convertParamArrayToMap(pathParams));
    }

    static convertParamArrayToMap(params: Array<Param>): Map<string, string> {
        let map = new Map<string, string>();

        return params.reduce((map, param) => {
            map.set(param.name, param.value);
            return map;
        }, map);
    }
}

export class Param {
    name: string;
    value: string;
}
