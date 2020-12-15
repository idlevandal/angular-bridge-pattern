import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-music-widget',
  templateUrl: './music-widget.component.html',
  styleUrls: ['./music-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: MusicWidgetComponent
  }]
})
export class MusicWidgetComponent implements Widget {

  public isRefreshing: boolean = false;
  public title: string = 'Music';

  public load() {
    console.log('Load data from MUSIC API...');
  }

  public refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false
    }, 2500)
  }

}
