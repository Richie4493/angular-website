import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FrontendComponent } from './components/body-content/frontend/frontend.component';
import { DeejayComponent } from './components/body-content/deejay/deejay.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/body-content/frontend/about-me/about-me.component';
import { ExperienceComponent } from './components/body-content/frontend/experience/experience.component';
import { SkillsComponent } from './components/body-content/frontend/skills/skills.component';
import { ProjectsComponent } from './components/body-content/frontend/projects/projects.component';
import { LoaderComponent } from './components/loader/loader.component';

const appRoutes: Routes = [
  {
    path: 'frontend',
    component: FrontendComponent
  },{
    path: 'deejay',
    component: DeejayComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontendComponent,
    DeejayComponent,
    FooterComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
