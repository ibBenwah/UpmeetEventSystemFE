import { Injectable } from '@angular/core';
import { Event } from './event';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FavoritedEvent } from './favorited-event';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  [x: string]: any;
  // events: Event[] = [
  //   {
  //     id: 1,
  //     title: "JOE VERAS EN CONCIERTO ! BALTIMORE MARYLAND",
  //     performing: "JOE VERAS",
  //     imgURL: "https://d3m2ck9isazgad.cloudfront.net/w652/eventFlyer/1665166120481-76e387468cf243155b1193ad.jpeg",
  //     videoURL: "https://www.youtube.com/embed/GD9wKjHEJbE",
  //     venue: "VIP ROOM Baltimore 3919 EAST LOMBARD STREET Baltimore Maryland 21224",
  //     price: 50.00,
  //     favorite: false,
  //     eventDatetime: "Saturday, November 12th",
  //     eventCategory: "Music",
  //     contactInfo: "443.430.1905",
  //     description: "JOE VERAS EN CONCIERTO ! BALTIMORE MARYLAND"
  //   }
  // ];
  // constructor() { }

  // allEvents(): Event[] {
  //   return this.events
  // }

  backendURL: string = 'https://localhost:7295/api/Events/';
  //                    https://localhost:7295/api/Events/events

  constructor(private httpClient: HttpClient) { }
  getOfEvent = (): Observable<Event[]> => {
    return this.httpClient.get<Event[]>(this.backendURL + "events");
  }

  addNewEvent = (event: Event): Observable<Event> => {
    return this.httpClient.post<Event>(this.backendURL + "/Events", event);
  }

  deleteEvent = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/Events/" + id);
  }

  bookmarkEvent = (id: number, userId: string): Observable<FavoritedEvent> => {
    return this.httpClient.get<FavoritedEvent>(this.backendURL + "/bookmark/");
  }

  userId: string = "admin";

  // addNewOrder = (order: Order): Observable<Order> => {
  //   return this.httpClient.post<Order>(this.backendURL + "/orders", order);
  // }
}
