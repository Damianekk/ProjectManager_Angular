import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PersonService } from 'src/app/Services/person-service.service';
import { PersonBase } from 'src/app/Models/PersonBaseModel';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'users-dropdownlist',
  templateUrl: './users-dropdownlist.component.html',
  styleUrls: ['./users-dropdownlist.component.less']
})
export class UsersDropdownlistComponent implements OnInit {

  users: PersonBase[];

  @Input() inputModel: Guid;
  @Input() editable: boolean;
  @Input() required: boolean;
  @Output() inputModelChange = new EventEmitter<Guid>();


  constructor(private userService: PersonService) {
    this.editable = true;
  }

  ngOnInit() {
    this.userService.getPersonsListObs().subscribe(users => {
      this.users = users;
    });
  }

}
