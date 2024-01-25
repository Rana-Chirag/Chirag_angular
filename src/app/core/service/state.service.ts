
// state.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl = 'http://127.0.0.1:5000/webx/state/AllState'; // Adjust the URL to your backend API

  constructor(private http: HttpClient) {}

  getStates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/states`);
  }
}