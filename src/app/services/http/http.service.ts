import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  baseUrl = 'https://sohaybsaleh95.000webhostapp.com/apitest';
  constructor(private http: Http) {

  }

  public get(url) {
    return this.http.get(this.baseUrl + url).map((res) => res.json());
  }

  public post(url, data) {
    return this.http.post(this.baseUrl + url, data).map((res) => res.json());
  }

}
