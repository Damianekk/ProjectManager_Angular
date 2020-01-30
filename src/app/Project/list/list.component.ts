import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../Services/app-service.service';
import { Project } from 'src/app/Models/ProjectModel';
import { ProjectService } from 'src/app/Services/project-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  projects;

  constructor(private projectService: ProjectService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.projectService.getProjectsListObs().subscribe(projects => {
      this.projects = projects;
    });
  }

  add() {
    this.projectService.AddProject(new Project('fake ' + this.formatDate(new Date())));
  }

  formatDate(date){
    return this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
  }

}
