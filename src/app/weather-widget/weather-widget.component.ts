import { Component, OnInit, ViewChild } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: WeatherWidgetComponent
  }]
})
export class WeatherWidgetComponent implements OnInit, Widget {

  public isRefreshing: boolean = false;
  public title: string = 'Weather';

  constructor() { }

  ngOnInit(): void {
  }

  public load(): void {
    console.log('Load data from WEATHER API...');
  }

  public refresh(): void {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }

}
