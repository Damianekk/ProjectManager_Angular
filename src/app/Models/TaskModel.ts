import { Guid } from 'guid-typescript';

export class Task{
  Title: string;
  Created: Date;
  Id: Guid;
  ProjectId?: Guid;
  Progress: number;

  /**
   *
   */
  constructor(title?: string) {
     this.Title = title;
     this.Created = new Date();
     this.Id = Guid.create();
     this.Progress = 0;
  }
}
