import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-listings',
  templateUrl: './event-listings.component.html',
  styleUrls: ['./event-listings.component.css']
})
export class EventListingsComponent implements OnInit {
  event: Event[] = [];
  detail: boolean = true;

constructor(private service: EventService, private router: Router){ }

  ngOnInit(): void {
    this.service.getOfEvent().subscribe(data => this.event = data);
  }
  toggleFavorite(currEvent: Event): void {
    currEvent.favorite = !currEvent.favorite;
  }
  displayEventItems(id: number) {
    this.service.eventBeingUsed(id);
     this.router.navigate(['/event-items/']); // route back to all tickets list
  }

}
