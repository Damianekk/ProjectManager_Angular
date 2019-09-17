import { Task } from './../../Models/TaskModel';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.less']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;
  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      const guid = param.get('id');
      this.task = this.appService.getTask(guid);
    });
  }

}
