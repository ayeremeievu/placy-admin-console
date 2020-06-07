import { ParamValue } from './paramValue';
export class TaskInstance {
    code: string;
    taskCode: string;
    status: string;
    params: ParamValue[];
    startDate: string;
    finishDate: string;
}