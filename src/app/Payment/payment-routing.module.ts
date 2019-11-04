import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';


const routes: Routes = [
  // {
  //   path: 'add',
  //   component: AddComponent
  // },
  {
    path: '',
    component: PaymentListComponent,
    children: [
      {
        path: ':id',
        component: PaymentDetailsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
