import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';


@Component({
  selector: 'app-event-items',
  templateUrl: './event-items.component.html',
  styleUrls: ['./event-items.component.css']
})
export class EventItemsComponent implements OnInit {
  event: Event[] = [];
  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.event = this.service.allEvents();
  }

}
