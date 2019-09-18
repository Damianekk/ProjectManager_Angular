import { AppService } from 'src/app/Services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/TaskModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.less']
})
export class TaskAddComponent implements OnInit {

  task: Task;
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.task = new Task();
  }

  onSubmit(){
    this.appService.AddTask(this.task);
    this.router.navigate(['/tasks']);
  }
}
