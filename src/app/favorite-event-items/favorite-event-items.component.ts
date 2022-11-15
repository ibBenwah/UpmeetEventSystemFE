import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-favorite-event-items',
  templateUrl: './favorite-event-items.component.html',
  styleUrls: ['./favorite-event-items.component.css']
})
export class FavoriteEventItemsComponent implements OnInit {
  @Input() fav: Event = {} as Event;
  favorite: boolean = true;

  ngOnInit(): void {
  }


//Insert a toggle to true if the button pressed

  toggleFavorite():void {
    this.favorite=!this.favorite;
  }


//Add event to the favorites array 

}
