import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgxJacoboLib2Module, TestModuleComponent } from '@jarimo97/ngx-jacobo-lib2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJacoboLib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { TestModuleComponent };
