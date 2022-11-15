import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventItemsComponent } from './event-items/event-items.component';
import { EventListingsComponent } from './event-listings/event-listings.component';
import { FavoriteEventItemsComponent } from './favorite-event-items/favorite-event-items.component';

const routes: Routes = [
  {path:'event-listings',component:EventListingsComponent},
  {path:'event-items',component:EventItemsComponent},
  {path:'favorite-event-items',component:FavoriteEventItemsComponent},
  {path:'',component:EventListingsComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
