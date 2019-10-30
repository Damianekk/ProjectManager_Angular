import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonBase } from '../Models/PersonBaseModel';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  private personListObs = new BehaviorSubject<Array<PersonBase>>([]);

  constructor() { }

  AddTask(person: PersonBase){
    const persons = this.personListObs.getValue();
    persons.push(person);
    this.personListObs.next(persons);
  }

  getPersonsListObs(): Observable<Array<PersonBase>> {
    return this.personListObs.asObservable();
  }
}
