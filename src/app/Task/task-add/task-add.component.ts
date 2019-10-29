import { AppService } from 'src/app/Services/app-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/Models/TaskModel';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.less']
})
export class TaskAddComponent implements OnInit {

  task: Task;
  @ViewChild('progressBarRef',{ static: false }) progressBarRef: any;
  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.task = new Task();
    this.route.paramMap.subscribe((param: Params) => {
      const projectGuid = param.get('id');
      this.task.ProjectId = projectGuid;
    });
  }

  onSubmit() {
    this.task.Progress = this.progressBarRef.currProgress;
    this.appService.AddTask(this.task);
    this.router.navigate(['/tasks']);
  }
}
