import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-bar-control',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {

  @Input() currProgress: number;
  @Input() editable: boolean;

  constructor() {
    this.currProgress = 0;
    this.editable = true;
  }

  ngOnInit() {
  }

  increaseProgress(){
    if(this.currProgress !== 100){
      this.currProgress += 10;
    }
  }

  decreaseProgress(){
    if(this.currProgress !== 0){
      this.currProgress -= 10;
    }
  }
}
