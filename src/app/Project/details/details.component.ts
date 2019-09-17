import { AppService } from './../../Services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  projectName;
  projects;
  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((param: Params) => {
      this.projectName = param.get('name');
    });

    this.appService.getProjectsListObs().subscribe(projects => {
      this.projects = projects;
    });
  }
}
