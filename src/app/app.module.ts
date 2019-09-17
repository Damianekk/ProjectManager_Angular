import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './Project/details/details.component';
import { ListComponent as Projects } from './Project/list/list.component';
import { AddComponent } from './Project/add/add.component';
import { ListComponent as Tasks } from './Task/list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsStatsComponent } from './Project/projects-stats/projects-stats.component';
import { from } from 'rxjs';
import { TaskDetailsComponent } from './Task/task-details/task-details.component';
import { AppService } from './Services/app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    Projects,
    AddComponent,
    Tasks,
    PageNotFoundComponent,
    ProjectsStatsComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
