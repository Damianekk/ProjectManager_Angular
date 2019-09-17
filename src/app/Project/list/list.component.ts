import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../Services/app-service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  projects;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getProjectsListObs().subscribe(projects => {
      this.projects = projects;
    });
  }

  add(){
    this.appService.AddProject('auuu');
  }

}
