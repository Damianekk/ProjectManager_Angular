import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/TaskModel';
import { TaskService } from 'src/app/Services/task-service.service';
import { Guid } from 'guid-typescript';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  tasks: Array<Task>;
  constructor(private taskService: TaskService, private toastService: NbToastrService) { }

  ngOnInit() {
    this.taskService.getTasksListObs().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  remove(guid: Guid){
    this.taskService.removeTask(guid);
    this.toastService.success('Task removed');
  }

}
