import { Guid } from 'guid-typescript';
import { Injectable } from '@angular/core';
import { Task } from '../Models/TaskModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectService } from './project-service.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private projectService: ProjectService) {
    this.initTasks();
  }

  private initTasks(): void {
    this.projectService.getProjectsListObs().subscribe((projects) => {
      this.AddTask(new Task('projekt toDo', 30, projects[0].Id));
      this.AddTask(new Task('korepetycje', 60, projects[1].Id));
      this.AddTask(new Task('test', 0, projects[2].Id));
    }).unsubscribe();
  }

  AddTask(newTask: Task) {
    const tasks = this.tasksListObs.getValue();
    tasks.push(newTask);
    this.tasksListObs.next(tasks);
  }

  removeTask(taskId: Guid) {
    const tasks = this.tasksListObs.getValue().filter(e => !e.Id.equals(taskId));
    this.tasksListObs.next(tasks);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getProjectTasks(projectId: Guid): Array<Task> {
    const tasks = this.tasksListObs.getValue().filter(x => x.ProjectId && x.ProjectId.equals(projectId) );
    return tasks;
  }

  getTask(taskId: Guid): Task {
    const task = this.tasksListObs.getValue().filter(x => x.Id.equals(taskId))[0];
    return task;
  }

}
