import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './../../Services/app-service.service';
import { from } from 'rxjs';
import { Project } from 'src/app/Models/ProjectModel';
import { NbToastrService } from '@nebular/theme';

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
  constructor(private appService: AppService, private router: Router, private toastService: NbToastrService) {

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
    this.appService.AddProject(this.project);
    this.router.navigate(['/projects']);
    this.toastService.success('New project added');
    this.toastService.danger('addas');
  }
}
