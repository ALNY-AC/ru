import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuModule } from 'projects/ru/src/public_api';
import { FormsModule } from '@angular/forms';
import { HtmlToTextPipe } from './pipe/html-to-text.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HtmlToTextPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RuModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
