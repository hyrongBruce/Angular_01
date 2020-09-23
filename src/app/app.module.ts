import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { InputDirectiveDirective } from './input-directive.directive';
import { ClockComponent } from './clock/clock.component';
import { CRUDComponent } from './crud/crud.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    InputDirectiveDirective,
    ClockComponent,
    CRUDComponent
  ],
  imports: [
    AppRoutingModule, // this is for rooting
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
