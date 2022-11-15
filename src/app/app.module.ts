import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventItemsComponent } from './event-items/event-items.component';
import { FavoriteEventItemsComponent } from './favorite-event-items/favorite-event-items.component';
import { EventListingsComponent } from './event-listings/event-listings.component';
import { EventsNavComponent } from './events-nav/events-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemsComponent,
    FavoriteEventItemsComponent,
    EventListingsComponent,
    EventsNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
