import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { NbCardModule, NbDatepickerModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const nb = [
  NbCardModule,
  NbDatepickerModule,
];

@NgModule({
  declarations: [PaymentDetailsComponent, PaymentListComponent, PaymentAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaymentRoutingModule,
    nb,
  ],
  exports: [
    PaymentListComponent,
    PaymentAddComponent
  ]
})
export class PaymentModule { }
