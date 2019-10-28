import { Guid } from 'guid-typescript';
import { Injectable } from '@angular/core';
import { Task } from '../Models/TaskModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../Models/ProjectModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private projectsListObs = new BehaviorSubject<Array<Project>>([]);
  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.initProjects();
  }

  private initProjects(): void {
    const projects =  [new Project('test 1'), new Project('test 2'), new Project('test 3')];
    this.projectsListObs.next(projects);

    this.addTask('nadsos');
    this.addTask('dsad');

  }

  AddProject(newProject: Project){
    console.log(newProject);
    const projects = this.projectsListObs.getValue();
    projects.push(newProject);
    this.projectsListObs.next(projects);
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
    const tasks = this.tasksListObs.getValue().filter(e => e.Id !== taskId);
    this.tasksListObs.next(tasks);
  }

  getProjectsListObs(): Observable<Array<Project>> {
    return this.projectsListObs.asObservable();
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getProject(projectId: Guid): Project {
    const project = this.projectsListObs.getValue().filter(x => x.Id.equals(projectId))[0];
    return project;
  }

  getTask(taskId: Guid): Task {
    const task = this.tasksListObs.getValue().filter(x => x.Id.equals(taskId))[0];
    return task;
  }

  getProjectTasks(projectId: Guid): Array<Task> {
    const tasks = this.tasksListObs.getValue().filter(x => x.ProjectId === projectId);
    return tasks;
  }
}
