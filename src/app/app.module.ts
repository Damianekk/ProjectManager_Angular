import { SharedModule } from './Shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListComponent as Tasks } from './Task/list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { from } from 'rxjs';
import { TaskDetailsComponent } from './Task/task-details/task-details.component';
import { AppService } from './Services/app-service.service';
import { TaskAddComponent } from './Task/task-add/task-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic'}),
    NbLayoutModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
