import { Project } from './project';

export class Category {
  title: string;
  description: string;
  projects: Array<Project>;

  constructor(title: string, description: string, projects: Array<Project>) {
    this.title = title;
    this.description = description;
    this.projects = projects;
  }
}
