import { Param } from './param';
import { ParamValue } from './paramValue';

export class CreateTaskData {
    code: string;
    paramValues: Array<ParamValue>;
}
