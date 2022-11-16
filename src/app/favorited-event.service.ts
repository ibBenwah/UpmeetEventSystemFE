import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavoritedEventService {

  backendURL: string = 'https://localhost:7157/api';

  constructor(private httpClient: HttpClient) { }

  getOEvent = (): Observable<Event[]> => {
    return this.httpClient.get<Event[]>(this.backendURL + "/event");
  }

  addNewEvent = (event: Event): Observable<Event> => {
    return this.httpClient.post<Event>(this.backendURL + "/event", event);
  }

  deleteEvent = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/event/" + id);
  }
}
