import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/Models/TaskModel';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TaskService } from 'src/app/Services/task-service.service';

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
    private toastService: NbToastrService
  ) { }

  ngOnInit() {
    this.task = new Task();
    this.route.paramMap.subscribe((param: Params) => {
      const projectGuid = param.get('id');
      this.task.ProjectId = projectGuid;
    });
  }

  onSubmit() {
    this.task.Progress = this.progressBarRef.currProgress;
    this.taskService.AddTask(this.task);
    this.router.navigate(['/tasks']);
    this.toastService.success('New task added');
  }
}
