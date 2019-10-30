import { Guid } from 'guid-typescript';

export class PersonBase {

  constructor(
    public Id: Guid,
    public Name: string,
    public Surname: string
  ) {}
}
