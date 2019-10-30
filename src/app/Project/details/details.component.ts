import { Task } from 'src/app/Models/TaskModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/Services/task-service.service';
import { ProjectService } from 'src/app/Services/project-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  project;
  projectTasks: Task[];
  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((param: Params) => {
      const guid = param.get('id');
      this.project = this.projectService.getProject(guid);
      this.projectTasks = this.taskService.getProjectTasks(guid);
    });
  }
}
