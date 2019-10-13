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
import { ProjectModule } from './Project/project.module';

@NgModule({
  declarations: [
    AppComponent,
    Tasks,
    PageNotFoundComponent,
    TaskDetailsComponent,
    TaskAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProjectModule, // gdy mamy wydzielony routing z projektów to ta linijka musi być przed importem ogólnego routingu bo inaczej routing z projektów nie będzie działać
    AppRoutingModule,
    SharedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
