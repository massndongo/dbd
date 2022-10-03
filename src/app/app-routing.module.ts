import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramComponent } from './components/program/program.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'speakers', component: SpeakersComponent },

  { path: 'about', component: AboutComponent },
  { path: 'program', component: ProgramComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
