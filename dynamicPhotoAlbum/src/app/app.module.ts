import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import {CardsComponent} from './components/cards/cards.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
