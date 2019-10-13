import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent, TaskAddComponent, TaskDetailsComponent } from './index';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task.routing.module';

@NgModule({
  declarations: [
    ListComponent,
    TaskAddComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    ReactiveFormsModule
  ]
})
export class TaskModule {}
