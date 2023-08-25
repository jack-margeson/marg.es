import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { Project } from './project';
import data from './data.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  categories: Array<Category> = [];

  ngOnInit(): void {
    this.buildCategoriesFromJSON();
  }

  buildCategoriesFromJSON() {
    data.forEach((category: any) => {
      let projects: Array<Project> = [];
      category.projects.forEach((project: any) => {
        projects.push(
          new Project(
            project.name,
            project.description,
            project.long_description,
            project.img_ref
          )
        );
      });
      this.categories.push(
        new Category(category.title, category.description, projects)
      );
    });
  }
}
