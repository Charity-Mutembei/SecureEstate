import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZillowService {

  constructor(private http: HttpClient) { }
  fetchData(): Observable<any> {
    const options = {
      params: new HttpParams().set('property_id', '4951372754'),
      headers: new HttpHeaders(
      {
        'X-RapidAPI-Key': '407dadc3cemsh28a3d543c05888fp1a5acbjsnb56a1f4f75cd',
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      })
    };

    return this.http.get('https://us-real-estate.p.rapidapi.com/v3/property-detail', options);
  }
}
