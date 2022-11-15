import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
@Component({
  selector: 'app-event-listings',
  templateUrl: './event-listings.component.html',
  styleUrls: ['./event-listings.component.css']
})
export class EventListingsComponent implements OnInit {
  event: Event[] = [];
  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.event = this.service.allEvents();
  }

}