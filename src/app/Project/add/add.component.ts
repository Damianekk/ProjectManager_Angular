import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './../../Services/app-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-project-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  projectName = '';
  errorMsg = 'Uzupełnij pole';
  showError = false;
  constructor(private appService: AppService, private router: Router) {

  }


  ngOnInit() {

  }

  addProject() {
    if (this.projectName === '') {
      this.showError = true;
      return;
    }
    this.showError = false;
    this.appService.AddProject(this.projectName);
    this.projectName = '';
    this.router.navigate(['/projects']);

  }
}
