import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/Models/TaskModel';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TaskService } from 'src/app/Services/task-service.service';
import { Guid } from 'guid-typescript';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.less']
})
export class TaskAddComponent implements OnInit {

  task: Task;
  @ViewChild('progressBarRef', { static: false }) progressBarRef: any;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: NbToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    this.initTask();

    this.route.paramMap.subscribe((param: Params) => {
      const projectGuid = param.get('id');
      if (projectGuid) {
        this.task.ProjectId = Guid.parse(projectGuid);
      }
    });
  }

  onSubmit(taskForm) {
    if (taskForm.form.status !== 'VALID') {
      this.toastService.warning('Please ensure valid data');
      return;
    }

    this.task.Progress = this.progressBarRef.currProgress;
    this.taskService.AddTask(this.task);
    this.location.back();
    this.toastService.success('New task added');
  }

  initTask() {
    this.task = new Task();
  }
}
