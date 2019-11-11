import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';


const routes: Routes = [
  {
    path: 'add',
    component: PaymentAddComponent
  },
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
