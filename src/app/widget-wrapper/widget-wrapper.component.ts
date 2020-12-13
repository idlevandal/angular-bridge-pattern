import { Component, ContentChild, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET, {static: true})
  widget: Widget;

  public title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = this.widget.title;
    this.widget.load();
  }

  public onRefresh(): void {
    this.widget.refresh();
  }

}
