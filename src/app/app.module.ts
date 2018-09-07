import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpService } from './services/http/http.service';
import { CategoryService } from './services/category/category.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HttpService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
