import { EventService } from '../event.service';
import { Event } from '../event';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FavoritedEvent } from '../favorited-event';



@Component({
  selector: 'app-event-items',
  templateUrl: './event-items.component.html',
  styleUrls: ['./event-items.component.css']
})
export class EventItemsComponent implements OnInit {
  @Output() favoritedEventSaved = new EventEmitter<Event>();
  eventId: number = 0;
  userId: string = "";
  bookmark: FavoritedEvent = {} as FavoritedEvent;

  event: Event[] = [];
  
  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.service.getOfEvent().subscribe(data => this.event = data);
  }
  
  addFavorite  (eventId: number){
    this.service.bookmarkEvent(this.eventId, this.service.userId).subscribe(data => this.bookmark = data);
  }
 
}
