import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutMeComponent } from './Component/about-me/about-me.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ExperienceComponent } from './Component/experience/experience.component';
import { SkillsComponent } from './Component/skills/skills.component';
import { ProfileComponent } from './Component/profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'aboutme', component: AboutMeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'skill', component: SkillsComponent }
];
