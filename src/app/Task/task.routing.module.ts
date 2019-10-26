import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAddComponent, ListComponent, TaskDetailsComponent } from './index';

const routes: Routes = [
  {
    path: 'add/:id',
    component: TaskAddComponent
  },
  {
    path: ':id',
    component: TaskDetailsComponent
  },
  {
    path: '',
    component: ListComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
