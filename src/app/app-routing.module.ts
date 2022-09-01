import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'speakers', component: SpeakersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
