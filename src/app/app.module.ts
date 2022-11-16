import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventItemsComponent } from './event-items/event-items.component';
import { FavoriteEventItemsComponent } from './favorite-event-items/favorite-event-items.component';
import { EventListingsComponent } from './event-listings/event-listings.component';
import { EventsNavComponent } from './events-nav/events-nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
