import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  rootUrl = 'http://localhost:4000';

  postWorkout(data: any) {
    return this.http.post<any>(`${this.rootUrl}/workouts`, data);
  }
}
