import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { EducationComponent } from './content/education/education.component';
import { ProjectsLandingComponent } from './projects-landing/projects-landing.component';
import { EducationItemComponent } from './content/education/education-item/education-item.component';
import { SkillsComponent } from './content/education/skills/skills.component';
import { AboutComponent } from './content/about/about.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ContactComponent } from './content/contact/contact.component';
import { InViewportModule } from 'ng-in-viewport';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsLandingComponent,
    EducationComponent,
    EducationItemComponent,
    SkillsComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
