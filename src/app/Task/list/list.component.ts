import { AppService } from './../../Services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/TaskModel';

@Component({
  selector: 'app-task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  tasks: Array<Task>;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getTasksListObs().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
