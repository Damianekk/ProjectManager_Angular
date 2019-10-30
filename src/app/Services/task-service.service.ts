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
      const tasks =  [
        new Task('projekt toDo', 30, projects[0].Id),
        new Task('korepetycje', 60, projects[1].Id),
        new Task('test', 0, projects[2].Id),
      ];
      this.tasksListObs.next(tasks);
      console.log(tasks);
    });
  }

  AddTask(newTask: Task){
    const tasks = this.tasksListObs.getValue();
    console.log(newTask);
    tasks.push(newTask);
    this.tasksListObs.next(tasks);
  }

  addTask(newTask: string) {
    const task = new Task(newTask);
    const tasks = this.tasksListObs.getValue();
    tasks.push(task);
    newTask = '';
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
    console.log('guid ' + projectId.toString());
    const tasks = this.tasksListObs.getValue().filter(x => x.ProjectId.equals(projectId));
    return tasks;
  }

  getTask(taskId: Guid): Task {
    const task = this.tasksListObs.getValue().filter(x => x.Id.equals(taskId))[0];
    return task;
  }

}
