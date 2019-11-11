import { Guid } from 'guid-typescript';

export class Payment {

  constructor(public TaskId: Guid, public Amount?: number, public PaymentDate?: Date) {}
}
