import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonBase } from '../Models/PersonBaseModel';
import { Guid } from 'guid-typescript';
import { Payment } from '../Models/PaymentModel';
import { TaskService } from './task-service.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentListObs = new BehaviorSubject<Array<Payment>>([]);

  constructor(private taskService: TaskService) {
    this.initPayments();
  }
  initPayments() {
    this.taskService.getTasksListObs().subscribe((tasks) => {
      this.AddPayment(new Payment(tasks[0].Id, 60, new Date()));
      this.AddPayment(new Payment(tasks[1].Id, 70.99, new Date()));
    }).unsubscribe();
  }


  AddPayment(payment: Payment) {
    const payments = this.paymentListObs.getValue();
    payments.push(payment);
    this.paymentListObs.next(payments);
  }

  getPaymentListObs(): Observable<Array<Payment>> {
    return this.paymentListObs.asObservable();
  }

  getTaskPayments(paymentId: Guid): Array<Payment> {
    const tasks = this.paymentListObs.getValue().filter(x => x.TaskId && x.TaskId.equals(paymentId) );
    return tasks;
  }

}
