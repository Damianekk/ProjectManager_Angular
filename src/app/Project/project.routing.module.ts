import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent, ListComponent, DetailsComponent } from './index';

const routes: Routes = [
  {
    path: 'projects/add',
    component: AddComponent
  },
  {
    path: 'projects',
    component: ListComponent,
    children: [
      {
        path: ':name',
        component: DetailsComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
