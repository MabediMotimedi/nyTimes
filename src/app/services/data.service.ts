import { ServiceEnpoints } from './../API/ServiceEndpoints';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public httpClient: HttpClient) { }



  public getMostViewedArticles(noOfDays) {
    let headers =
    {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    const url = ServiceEnpoints.mostViewedArticles.replace('{days}', noOfDays);
    return this.httpClient.get(ServiceEnpoints.baseURL + url, headers);
  }


}
