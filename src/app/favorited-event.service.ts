import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { Observable } from 'rxjs';
import { FavoritedEvent } from './favorited-event';
import { EventService } from './event.service';
@Injectable({
  providedIn: 'root'
})
export class FavoritedEventService {

  backendURL: string = 'https://localhost:7295/api';

  constructor(private httpClient: HttpClient) { }

  getFavorites = (): Observable<FavoritedEvent[]> => {
    return this.httpClient.get<FavoritedEvent[]>(this.backendURL + "/FavoritedEvents");
  }

  // getEventTranslation = (): Observable<EventService[]> => {
  //   return this.httpClient.get<EventService[]>(this.backendURL + "events");
  // }

  // addNewEvent = (event: Event): Observable<Event> => {
  //   return this.httpClient.post<Event>(this.backendURL + "/event", event);
  // }

  // deleteEvent = (id: number): Observable<void> => {
  //   return this.httpClient.delete<void>(this.backendURL + "/event/" + id);
  //   //                            https://localhost:7295/api/FavoritedEvents
  //}

  
  
}
