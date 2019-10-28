import { NgModule } from '@angular/core';
import { NbButtonModule, NbProgressBarModule, NbIconModule } from '@nebular/theme';
import { ProjectsStatsComponent } from './projects-stats/projects-stats.component';
import { ProgressBarComponent } from './Controls/progress-bar/progress-bar.component';

const nbModules = [
  NbProgressBarModule,
  NbIconModule,
  NbButtonModule,
];

@NgModule({
  declarations: [ProjectsStatsComponent, ProgressBarComponent],
  imports: [nbModules],
  exports: [
    ProjectsStatsComponent,
    ProgressBarComponent,
  ]
})
export class SharedModule {}
