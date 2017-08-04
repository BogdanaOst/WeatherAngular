import { Component, OnInit } from '@angular/core';
import {historyElem} from '../models/historyElem';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
 
  constructor()
   { 
    let x:historyElem=new historyElem();
    x.date="01.01.2017";
    x.city="Kiev";
    x.dayTemp=10;
    x.numOfDays=1;
    
    this.historyList=[x];
   }
    historyList: historyElem[];
  ngOnInit() {
    
  }

}
