import { AppService } from './../../Services/app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-stats',
  templateUrl: './projects-stats.component.html',
  styleUrls: ['./projects-stats.component.less']
})
export class ProjectsStatsComponent implements OnInit {

  projectList;
  constructor(private appService: AppService) {
      // this.projectList = new Array<string>();
   }

  ngOnInit() {
    this.appService.getProjectsListObs().subscribe((projects) => {
      this.projectList = projects;
    });
  }

}
