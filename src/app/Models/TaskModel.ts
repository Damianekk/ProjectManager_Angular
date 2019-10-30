import { Guid } from 'guid-typescript';

export class Task {
  Title: string;
  Created: Date;
  Finished?: Date;
  Deadline?: Date;
  Id: Guid;
  ProjectId?: Guid;
  Progress: number;
  ClientId: number;

  /**
   *
   */
  constructor(title?: string, progress: number = 0, projectId?: Guid) {
     this.Title = title;
     this.Created = new Date();
     this.Id = Guid.create();
     this.Progress = progress;
     this.ProjectId = projectId;
  }
}
