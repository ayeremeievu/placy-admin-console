import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/core/containers/pages/home/home.component';
import { TasksComponent } from './modules/processes/containers/pages/tasks/tasks.component';
import { ProcessesComponent } from './modules/processes/containers/pages/processes/processes.component';
import { PageNotFoundComponent } from './modules/core/containers/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'processes', component: ProcessesComponent},
  // { path: 'oauth2/redirect', component: AuthRedirectComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
