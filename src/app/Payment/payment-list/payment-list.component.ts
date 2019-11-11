import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from 'src/app/Services/payment.service';
import { Guid } from 'guid-typescript';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.less']
})
export class PaymentListComponent implements OnInit {

  @Input() taskId: Guid;
  payments;
  constructor(private paymentService: PaymentService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      const guid = param.get('id');
      this.paymentService.getPaymentListObs().subscribe(payments => {
        if (guid) {
          this.payments = payments.filter(z => z.TaskId.toString() === guid);
        } else {
          this.payments = payments;
        }
      });
    });
  }
}
