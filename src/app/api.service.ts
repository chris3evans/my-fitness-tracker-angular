import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  rootUrl = 'http://localhost:4000';

  postWorkout() {
    return this.http.post(`${this.rootUrl}/workouts`);
  }
}
