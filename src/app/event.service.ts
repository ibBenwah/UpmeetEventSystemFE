import { Injectable } from '@angular/core';
import { Event } from './event';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[] = [
    {
      id: 1,
      title: "JOE VERAS EN CONCIERTO ! BALTIMORE MARYLAND",
      performing: "JOE VERAS",
      imgURL: "https://d3m2ck9isazgad.cloudfront.net/w652/eventFlyer/1665166120481-76e387468cf243155b1193ad.jpeg",
      videoURL: "https://www.youtube.com/embed/GD9wKjHEJbE",
      venue: "VIP ROOM Baltimore 3919 EAST LOMBARD STREET Baltimore Maryland 21224",
      price: 50.00,
      favorite: false,
      eventDatetime: "Saturday, November 12th",
      eventCategory: "Music",
      contactInfo: "443.430.1905",
      description: "JOE VERAS EN CONCIERTO ! BALTIMORE MARYLAND"
    }
  ];
  constructor() { }

  allEvents(): Event[] {
    return this.events
  }
}
