import { AppService } from './../../Services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/project-service.service';

@Component({
  selector: 'app-projects-stats',
  templateUrl: './projects-stats.component.html',
  styleUrls: ['./projects-stats.component.less']
})
export class ProjectsStatsComponent implements OnInit {

  projectList;
  constructor(private projectService: ProjectService) {
      // this.projectList = new Array<string>();
   }

  ngOnInit() {
    this.projectService.getProjectsListObs().subscribe((projects) => {
      this.projectList = projects;
    });
  }

}
