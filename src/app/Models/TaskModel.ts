import { Guid } from 'guid-typescript';

export class Task{
  Title: string;
  Created: Date;
  Id: Guid;

  /**
   *
   */
  constructor(title?: string) {
     this.Title = title;
     this.Created = new Date();
     this.Id = Guid.create();
  }
}
