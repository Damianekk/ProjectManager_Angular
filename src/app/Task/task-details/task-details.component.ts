import { Task } from './../../Models/TaskModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.less']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      const guid = param.get('id');
      this.task = this.taskService.getTask(guid);
    });
  }

}
