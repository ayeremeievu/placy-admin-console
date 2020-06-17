import { Pipe, PipeTransform } from '@angular/core';
import { ProcessStepInstance } from '../../../../model/processStepInstance';
import { ProcessInstance } from '../../../../model/processInstance';

@Pipe({
    name: 'lastStep'
})
export class LastStepPipe implements PipeTransform {

    transform(processInstance: ProcessInstance): ProcessStepInstance {
        let procesStepsWithResult = processInstance.processStepsInstances
            .filter(processStepInstance => processStepInstance.processStepResult != null);

        return procesStepsWithResult[procesStepsWithResult.length - 1];
    }

}
