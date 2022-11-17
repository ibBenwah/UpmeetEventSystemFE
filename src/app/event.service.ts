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
    return this.httpClient.get<FavoritedEvent>(this.backendURL + "bookmark/" + id + "/" + userId);
  }
  //                                    https://localhost:7295/api/Events/bookmark/3/Garret
  userId: string = "admin";

  // addNewOrder = (order: Order): Observable<Order> => {
  //   return this.httpClient.post<Order>(this.backendURL + "/orders", order);
  // }
}
