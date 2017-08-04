import { Injectable } from '@angular/core';

import { Http } from "@angular/http";
import { HistoryElem } from "../models/historyElem";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HistoryService
{
    apipath:string;
    http: Http;
    constructor(http: Http)
    {
        this.apipath = "http://localhost:59721/api/";
    }

  getHistory(): Observable<HistoryElem[]> {
    return this.http.get(this.apipath+'History').map(res=>res.json());
  }
}