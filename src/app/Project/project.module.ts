import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { AddComponent, DetailsComponent, ListComponent } from './index';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectRoutingModule } from './project.routing.module';
import { NbToastrModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AddComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NbToastrModule.forRoot(),
  ]
})
export class ProjectModule {}
