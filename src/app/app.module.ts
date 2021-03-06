import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { VelocityWidgetComponent } from './velocity-widget/velocity-widget.component';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { MusicWidgetComponent } from './music-widget/music-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent,
    WidgetWrapperComponent,
    MusicWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
