import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HistoryComponent } from './history/history.component';
import { CitiesComponent } from './cities/cities.component';

import { HistoryService} from './services/history.service';
import { WeatherService} from './services/forecast.service';
import {CitiesService} from './services/cities.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HistoryComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
