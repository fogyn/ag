import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import * as url from "url";

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/hello';
  }
  public findAll(): Observable<Object>{
    return this.http.get(this.url);
  }

}
