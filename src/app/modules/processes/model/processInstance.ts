import { ParamValue } from './paramValue';
import { ProcessStepInstance } from './processStepInstance';

export class ProcessInstance {
    code: string;
    startDate: string;
    finishDate: string;
    status: string;
    processCode: string;
    processStepsInstances: ProcessStepInstance[];
    params: ParamValue[];

}