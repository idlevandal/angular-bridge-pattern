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

  constructor() { }

  ngOnInit(): void {
    this.widget.load()
  }

  public onRefresh(): void {
    this.widget.refresh();
  }

}
