import { Injectable } from '@angular/core';
import { Event } from './event';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[] = [
    {
    performing: "Red Wings",
    eventURL: "aaaaa",
    venue: "Little Ceasers Arena",
    price: 59.99,
    favorite: false,
    eventDatetime: "1994-11-05T08:15:30-05:00",
    eventCategory: "sports",
    contactInfo: "string",
    },
  ]
  constructor() { }

  allEvents(): Event[] {
    return this.events
  }
}
