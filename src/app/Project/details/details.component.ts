import { Task } from 'src/app/Models/TaskModel';
import { AppService } from './../../Services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  project;
  projectTasks: Task[];
  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((param: Params) => {
      const guid = param.get('id');
      this.project = this.appService.getProject(guid);
      this.projectTasks = this.appService.getProjectTasks(guid);
    });
  }
}
