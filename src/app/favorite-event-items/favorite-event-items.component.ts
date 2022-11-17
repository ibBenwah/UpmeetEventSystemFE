import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';
import { FavoritedEvent } from '../favorited-event';
import { FavoritedEventService } from '../favorited-event.service';


@Component({
  selector: 'app-favorite-event-items',
  templateUrl: './favorite-event-items.component.html',
  styleUrls: ['./favorite-event-items.component.css']
})
export class FavoriteEventItemsComponent implements OnInit {
  @Input() fav: FavoritedEvent = {} as FavoritedEvent;
  favorite: boolean = false;

  
  favoriteEvent: FavoritedEvent[] = [];
  
  constructor(private favoriteService: FavoritedEventService) { }
  
  ngOnInit(): void {
    this.favoriteService.getFavorites().subscribe(data => this.favoriteEvent = data);
  }
//Insert a toggle to true if the button pressed

  toggleFavorite():void {
    this.favorite=!this.favorite;
  }


//Add event to the favorites array 

}
