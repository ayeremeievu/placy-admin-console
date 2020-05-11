import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './containers/pages/tasks/tasks.component';
import { ProcessesComponent } from './containers/pages/processes/processes.component';
import { SharedModule } from '../shared/shared.module';
import { TaskItemComponent } from './components/tasks/task-item/task-item.component';
import { ProcessesListComponent } from './components/processes/processes-list/processes-list.component';
import { ProcessItemComponent } from './components/processes/process-item/process-item.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';

@NgModule({
    declarations: [
        TasksComponent,
        ProcessesComponent,
        TaskItemComponent,
        ProcessesListComponent,
        ProcessItemComponent,
        TasksListComponent
    ],
    imports: [CommonModule, SharedModule]
})
export class ProcessesModule {}
