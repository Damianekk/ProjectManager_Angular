import { Guid } from 'guid-typescript';

export class Project{
  ProjectName: string;
  Created: Date;
  Id: Guid;

  /**
   *
   */
  constructor(ProjectName?: string) {
     this.ProjectName = ProjectName;
     this.Created = new Date();
     this.Id = Guid.create();
  }
}
