import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent, TaskAddComponent, TaskDetailsComponent } from './index';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task.routing.module';
import { NbProgressBarModule, NbIconModule, NbButtonModule } from '@nebular/theme';

const nbModules = [
  NbProgressBarModule,
  NbIconModule,
  NbButtonModule,
];

@NgModule({
  declarations: [
    ListComponent,
    TaskAddComponent,
    TaskDetailsComponent,
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
