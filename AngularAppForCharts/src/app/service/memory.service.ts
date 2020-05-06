import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, JsonpModule } from '@angular/http';

import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(private http: HttpClient) {
  }



  getMemoryDetails(): Observable<any> {
    console.log('this....');
    
    return this.http.get<any>('http://localhost:8089/')
  }
}
