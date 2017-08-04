import { Component, OnInit } from '@angular/core';
import {CitiesService} from '../services/cities.service'
import { selectedCity } from './../models/selectedCity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: Observable<selectedCity[]>;
  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.getCities();
  }
 getCities(): void{
  //  this.cities = this.citiesService.Cities();
  }

  deleteCity(name: string){
    this.citiesService.deleteCity(name)
    .toPromise()
    .then(() => this.getCities());
  }

  addCity(name: string){
    this.citiesService.addCity(name)
    .toPromise()
    .then(() => this.getCities());
  }
}
