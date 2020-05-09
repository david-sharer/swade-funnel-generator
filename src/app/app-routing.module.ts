import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { FiftyFathomsComponent } from './characters/fifty-fathoms/fifty-fathoms.component';


const routes: Routes = [
  { path: 'characters/west-marches/:seed', component: CharactersComponent },
  { path: 'characters/50-fathoms/:seed', component: FiftyFathomsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
