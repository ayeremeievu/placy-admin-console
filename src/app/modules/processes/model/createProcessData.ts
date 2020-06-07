import { Param } from './param';
import { ParamValue } from './paramValue';

export class CreateProcessData {
    processCode: string;
    paramValues: Array<ParamValue>;
}
