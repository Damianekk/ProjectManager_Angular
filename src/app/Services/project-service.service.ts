import { Guid } from 'guid-typescript';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../Models/ProjectModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsListObs = new BehaviorSubject<Array<Project>>([]);

  constructor() {
    this.initProjects();
  }

  private initProjects(): void {
    const projects =  [new Project('test 1'), new Project('test 2'), new Project('test 3')];
    this.projectsListObs.next(projects);
  }

  AddProject(newProject: Project){
    const projects = this.projectsListObs.getValue();
    projects.push(newProject);
    this.projectsListObs.next(projects);
  }


  getProjectsListObs(): Observable<Array<Project>> {
    return this.projectsListObs.asObservable();
  }

  getProject(projectId: Guid): Project {
    const project = this.projectsListObs.getValue().filter(x => x.Id.equals(projectId))[0];
    return project;
  }
}
