import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/core/containers/pages/home/home.component';
import { TasksComponent } from './modules/processes/containers/pages/tasks/tasks.component';
import { ProcessesComponent } from './modules/processes/containers/pages/processes/processes.component';
import { PageNotFoundComponent } from './modules/core/containers/pages/page-not-found/page-not-found.component';
import { ProcessCreateComponent } from './modules/processes/containers/pages/processes/process-create/process-create.component';
import { TaskCreateComponent } from './modules/processes/containers/pages/tasks/task-create/task-create.component';
import { TaskInstancesComponent } from './modules/processes/containers/pages/task-instances/task-instances.component';
import { ProcessInstancesComponent } from './modules/processes/containers/pages/process-instances/process-instances.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'processes', component: ProcessesComponent },
    { path: 'processes/:code/create', component: ProcessCreateComponent },
    { path: 'tasks/:code/create', component: TaskCreateComponent },
    { path: 'task-instances', component: TaskInstancesComponent },
    { path: 'process-instances', component: ProcessInstancesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
