import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: './Project/project.module#ProjectModule'
  },
  {
    path: 'tasks',
    loadChildren: './Task/task.module#TaskModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },


];

@NgModule({
  imports: [
    // ProjectModule, // gdy mamy wydzielony routing z projektów to ta linijka musi być przed importem ogólnego routingu bo inaczej routing z projektów nie będzie działać
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
