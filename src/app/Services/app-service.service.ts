import { Guid } from 'guid-typescript';
import { Injectable } from '@angular/core';
import { Task } from '../Models/TaskModel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private projectsListObs = new BehaviorSubject<Array<string>>([]);
  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.initProjects();
  }

  private initProjects(): void {
    const projects =  ['proj 1', 'proj 2', 'proj 3'];
    this.projectsListObs.next(projects);

    this.addTask('nadsos');
    this.addTask('dsad');

  }

  AddProject(newProject: string){
    const projects = this.projectsListObs.getValue();
    projects.push(newProject);
    this.projectsListObs.next(projects);
  }

  AddTask(newTask: Task){
    const tasks = this.tasksListObs.getValue();
    tasks.push(newTask);
    this.tasksListObs.next(tasks);
  }

  addTask(newTask: string) {
    const task = new Task(newTask);
    const tasks = this.tasksListObs.getValue();
    tasks.push(task);
    newTask = '';
    console.log('Added new task: ' + task.Id);
    this.tasksListObs.next(tasks);
  }

  removeTask(taskId: Guid) {
    const tasks = this.tasksListObs.getValue().filter(e => e.Id !== taskId);
    this.tasksListObs.next(tasks);
    console.log('deleted task: ' + taskId);
  }

  getProjectsListObs(): Observable<Array<string>> {
    return this.projectsListObs.asObservable();
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTask(taskId: Guid): Task {
    const task = this.tasksListObs.getValue().filter(x => x.Id.equals(taskId))[0];
    return task;
  }
}
