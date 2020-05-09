import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { FiftyFathomsComponent } from './characters/fifty-fathoms/fifty-fathoms.component';
import { FiftyFathomsCharactersComponent } from './characters/fifty-fathoms/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    HomeComponent,
    FiftyFathomsComponent,
    FiftyFathomsCharactersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
