import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './containers/pages/tasks/tasks.component';
import { ProcessesComponent } from './containers/pages/processes/processes.component';
import { SharedModule } from '../shared/shared.module';
import { TaskItemComponent } from './components/tasks/task-item/task-item.component';
import { ProcessesListComponent } from './components/processes/processes-list/processes-list.component';
import { ProcessItemComponent } from './components/processes/process-item/process-item.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { ParamComponent } from './components/params/param/param.component';
import { ParamsListComponent } from './components/params/params-list/params-list.component';
import { ProcessCreateComponent } from './containers/pages/processes/process-create/process-create.component';
import { TaskCreateComponent } from './containers/pages/tasks/task-create/task-create.component';
import { TaskCreateFormComponent } from './containers/pages/tasks/task-create/task-create-form/task-create-form/task-create-form.component';
import { ParamFormsComponent } from './components/params/param-forms/param-forms.component';
import { ParamInputComponent } from './components/params/param-input/param-input.component';
import { ProcessCreateFormComponent } from './containers/pages/processes/process-create/process-create-form/process-create-form.component';
import { ProcessParamFormComponent } from './containers/pages/processes/process-create/process-param-form/process-param-form.component';
import { TaskInstancesComponent } from './containers/pages/task-instances/task-instances.component';
import { ProcessInstancesComponent } from './containers/pages/process-instances/process-instances.component';
import { TaskInstanceItemComponent } from './containers/pages/task-instances/task-instance-item/task-instance-item.component';
import { ProcessInstanceItemComponent } from './containers/pages/process-instances/process-instance-item/process-instance-item.component';
import { ProcessStepInstanceComponent } from './containers/pages/process-instances/process-step-instance/process-step-instance.component';
import { LastStepPipe } from './containers/pages/process-instances/process-instance-item/last-step.pipe';

@NgModule({
    declarations: [
        TasksComponent,
        ProcessesComponent,
        TaskItemComponent,
        ProcessesListComponent,
        ProcessItemComponent,
        TasksListComponent,
        ParamComponent,
        ParamsListComponent,
        TaskCreateComponent,
        ProcessCreateComponent,
        TaskCreateFormComponent,
        ParamFormsComponent,
        ParamInputComponent,
        ProcessCreateFormComponent,
        ProcessParamFormComponent,
        TaskInstancesComponent,
        ProcessInstancesComponent,
        TaskInstanceItemComponent,
        ProcessInstanceItemComponent,
        ProcessStepInstanceComponent,
        LastStepPipe
    ],
    imports: [CommonModule, SharedModule]
})
export class ProcessesModule {}
