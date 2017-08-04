import { Component, OnInit } from '@angular/core';
import {HistoryElem} from '../models/historyElem';
import { Observable } from "rxjs/Observable";
import {HistoryService} from '../services/history.service';
import {Http} from '@angular/http';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  historyList: Observable<HistoryElem[]>;
  constructor(private historyService: HistoryService){}
  ngOnInit() {
     this.getHistory();
  }
 getHistory():void{
    this.historyList = this.historyService.getHistory();
  }
}
