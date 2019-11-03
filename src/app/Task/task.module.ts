import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent, TaskAddComponent, TaskDetailsComponent } from './index';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task.routing.module';
import { NbProgressBarModule, NbIconModule, NbButtonModule, NbCardModule, NbDatepickerModule } from '@nebular/theme';
import { UsersDropdownlistComponent } from '../User/users-dropdownlist/users-dropdownlist.component';

const nbModules = [
  NbProgressBarModule,
  NbIconModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
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
    SharedModule
  ]
})
export class TaskModule {}
