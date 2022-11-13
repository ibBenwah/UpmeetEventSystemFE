import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventItemsComponent } from './event-items/event-items.component';
import { FavoriteEventItemsComponent } from './favorite-event-items/favorite-event-items.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemsComponent,
    FavoriteEventItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
