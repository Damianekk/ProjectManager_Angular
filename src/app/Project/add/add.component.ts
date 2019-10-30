import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Project } from 'src/app/Models/ProjectModel';
import { NbToastrService } from '@nebular/theme';
import { ProjectService } from 'src/app/Services/project-service.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  project: Project;
  projectName = '';
  errorMsg = 'Fill field';
  showError = false;
  constructor(private projectService: ProjectService, private router: Router, private toastService: NbToastrService) {

  }

  ngOnInit() {
    this.project = new Project();
  }

  addProject() {
    if (this.project.ProjectName === '') {
      this.showError = true;
      return;
    }
    console.log(this.project.ProjectName);
    this.showError = false;
    this.projectService.AddProject(this.project);
    this.router.navigate(['/projects']);
    this.toastService.success('New project added');
  }
}
