import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ImageComponent } from './image/image.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SliderComponent, ImageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
