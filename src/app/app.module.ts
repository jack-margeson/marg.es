import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { OnComponent } from './on/on.component';
import { AboutComponent } from './on/about/about.component';
import { ProjectsComponent } from './on/projects/projects.component';

const routes: Routes = [
  { path: 'on/about', component: AboutComponent },
  { path: 'on/projects', component: ProjectsComponent },
  { path: 'on', component: OnComponent },
  { path: '', redirectTo: 'on', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
