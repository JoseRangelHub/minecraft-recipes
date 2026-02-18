import { HttpClientModule } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MostViewedRecipes } from './components/most-viewed-recipes/most-viewed-recipes';
import { NavBar } from './components/nav-bar/nav-bar';
import { RecipeCardsContainer } from './components/recipe-cards-container/recipe-cards-container';
import { RecipeCard } from './components/recipe-card/recipe-card';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, MostViewedRecipes,
    NavBar, RecipeCardsContainer, RecipeCard
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
