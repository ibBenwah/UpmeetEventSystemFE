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
  detail: boolean = true;
  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.service.getOfEvent().subscribe(data => this.event = data);
  }
  
}
