import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonBase } from '../Models/PersonBaseModel';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personListObs = new BehaviorSubject<Array<PersonBase>>([]);

  constructor() {
    this.initUsers();
  }
  initUsers() {
    this.AddUser(new PersonBase(Guid.create(), 'Adam', 'Kowalski'));
    this.AddUser(new PersonBase(Guid.create(), 'Andrzej', 'Pawlik'));
  }


  AddUser(person: PersonBase) {
    const persons = this.personListObs.getValue();
    persons.push(person);
    this.personListObs.next(persons);
  }

  getPersonsListObs(): Observable<Array<PersonBase>> {
    return this.personListObs.asObservable();
  }
}
