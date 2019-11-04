import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent, TaskAddComponent, TaskDetailsComponent } from './index';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task.routing.module';
import { NbProgressBarModule, NbIconModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbTabsetModule, NbRouteTabsetModule } from '@nebular/theme';
import { UsersDropdownlistComponent } from '../User/users-dropdownlist/users-dropdownlist.component';
import { PaymentModule } from '../Payment/payment.module';

const nbModules = [
  NbProgressBarModule,
  NbIconModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbTabsetModule,
  NbRouteTabsetModule,
];

@NgModule({
  declarations: [
    ListComponent,
    TaskAddComponent,
    TaskDetailsComponent,
    UsersDropdownlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    nbModules,
    SharedModule,
    PaymentModule,
  ]
})
export class TaskModule {}
