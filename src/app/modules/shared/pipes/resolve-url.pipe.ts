import { Pipe, PipeTransform } from '@angular/core';
import { Param, RequestUrlBuilder } from '../utils/request-url-builder';

@Pipe({
    name: 'resolveUrl'
})
export class ResolveUrlPipe implements PipeTransform {
    transform(value: string, ...pathVariables: Param[]): string {
        return RequestUrlBuilder.buildUrlByArray(value, pathVariables);
    }
}
