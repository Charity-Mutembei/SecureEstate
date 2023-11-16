import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZillowService {
  url = 'https://securestate-6cd6372a6cab.herokuapp.com/posts/create';
  authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJleHBpcmUiOiIyMDIzLTExLTE2IDE0LTMwLTI3In0.QxBVN8YmYtYTQoCv7fTAWj2NpjSIqLFjWVmdXdj-dsI';

  constructor(private http: HttpClient) { }

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  savePostData(data: any): Observable<any> {
    if (!this.authToken) {
      console.error('401 dumbass');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.post(this.url, data, { headers });
  }
  
}
