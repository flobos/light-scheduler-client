import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs'
import { Flight } from '../models/flight'


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private endpoint = 'http://127.0.0.1:8000/flights/'

  constructor(private http: HttpClient) { }


  //get all flights

  getAllFlights(): Observable<any>{
    return this.http.get(this.endpoint)
  }

  //POST

  flightCreate(flight: Flight): Observable<object>{
    return this.http.post(this.endpoint,flight);
  }



}
