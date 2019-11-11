import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAddComponent, ListComponent, TaskDetailsComponent } from './index';
import { PaymentAddComponent } from '../Payment/payment-add/payment-add.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {
        path: 'add',
        component: TaskAddComponent
      },
      {
        path: 'add/:id',
        component: TaskAddComponent
      },
      {
        path: ':id',
        component: TaskDetailsComponent,
        children: [
          {
            path: 'addPayment',
            component: PaymentAddComponent
          },
        ]
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
