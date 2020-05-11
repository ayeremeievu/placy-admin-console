export class RequestUrlBuilder {
    static buildUrl(uri: string, pathParams: Map<string, string>): string {
        let result = uri;

        pathParams.forEach((value, name) => {
            result = result.replace(`{${name}}`, value);
        });

        return result;
    }
}
