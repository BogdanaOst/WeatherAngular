import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { selectedCity } from "../models/selectedCity";

import { Observable } from "rxjs/Observable";

@Injectable()export class CitiesService
{
    cities: selectedCity[];
    apipath:string;
    http: Http;
  constructor(http: Http) {
    this.apipath = "http://localhost:59721/api/";
  }
  get Cities(): Observable<selectedCity[]>
  {
      return this.http.get(this.apipath+'cities').map(res => res.json());
  }
  deleteCity(name: string)
  {
      return this.http.delete(this.apipath+'cities/?name='+name);
  }
  addCity(name: string)
  {
      return this.http.post(this.apipath+'cities/?name='+name,{'Name':name});
  }

}