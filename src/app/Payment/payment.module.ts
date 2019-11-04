import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentListComponent } from './payment-list/payment-list.component';


@NgModule({
  declarations: [PaymentDetailsComponent, PaymentListComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ],
  exports: [
    PaymentListComponent
  ]
})
export class PaymentModule { }
