import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./Project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./Task/task.module').then(m => m.TaskModule)
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
