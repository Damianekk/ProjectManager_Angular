import { TaskAddComponent } from './Task/task-add/task-add.component';
import { DetailsComponent as ProjectDetails } from './Project/details/details.component';
import { AddComponent as AddProject } from './Project/add/add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ListComponent as Projects } from './Project/list/list.component';
import { ListComponent  as Tasks} from './Task/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { TaskDetailsComponent } from './Task/task-details/task-details.component';

const routes: Routes = [
  {
    path: 'tasks/add',
    component: TaskAddComponent
  },
  {
    path: 'tasks/:id',
    component: TaskDetailsComponent
  },
  {
    path: 'tasks',
    component: Tasks
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
