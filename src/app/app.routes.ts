import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'navbar',
        component: NavbarComponent
    },
    {
        path: 'contact-me',
        component: ContactMeComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
