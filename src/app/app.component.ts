import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None // with this styles from app.component.less are visible in all modules / components
})
export class AppComponent implements OnInit  {

  ngOnInit() {
  }
}


