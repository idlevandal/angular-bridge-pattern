import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: VelocityWidgetComponent
  }]
})
export class VelocityWidgetComponent implements OnInit, Widget {

  public isRefreshing: boolean = false;
  public title: string = 'Sprint';

  constructor() { }

  ngOnInit(): void {
  }

  public load(): void {
    console.log('Load data from JIRA API...');
    
  }

  public refresh(): void {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }

}
