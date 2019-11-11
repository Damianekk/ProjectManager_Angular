import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/Models/PaymentModel';
import { Guid } from 'guid-typescript';
import { PaymentService } from 'src/app/Services/payment.service';
import { NbToastrService } from '@nebular/theme';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.less']
})
export class PaymentAddComponent implements OnInit {

  payment: Payment;
  constructor(private paymentService: PaymentService, private toastService: NbToastrService, private location: Location, private route: ActivatedRoute) {
    this.initPayment();
  }

  initPayment() {
    this.payment = new Payment(Guid.create());
  }
  ngOnInit() {
    this.route.parent.paramMap.subscribe((param: Params) => {
      const taskGuid = param.get('id');
      this.payment.TaskId = Guid.parse(taskGuid);
    });
  }


  onSubmit(paymentForm) {
    if (!paymentForm.valid) {
      this.toastService.warning('Please ensure valid data');
      return;
    }
    this.paymentService.AddPayment(this.payment);
    this.location.back();
    this.initPayment();
  }
}
