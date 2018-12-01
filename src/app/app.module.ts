import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NavComponent } from './body/nav/nav.component';
import { SliderComponent } from './body/slider/slider.component';
import { ImgComponent } from './body/img/img.component';
import { FotComponent } from './body/fot/fot.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavComponent,
    SliderComponent,
    ImgComponent,
    FotComponent,
    HomeComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
