import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuModule } from 'projects/ru/src/public_api';
import { FormsModule } from '@angular/forms';
import { HtmlToTextPipe } from './pipe/html-to-text.pipe';
import { DialogDemoComponent } from './pages/dialog-demo/dialog-demo.component';
import { ButtonDemoComponent } from './pages/button-demo/button-demo.component';
import { PanelDemoComponent } from './pages/panel-demo/panel-demo.component';
import { InputDemoComponent } from './pages/input-demo/input-demo.component';
import { TableDemoComponent } from './pages/table-demo/table-demo.component';
import { SelectDemoComponent } from './pages/select-demo/select-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    HtmlToTextPipe,
    DialogDemoComponent,
    ButtonDemoComponent,
    PanelDemoComponent,
    InputDemoComponent,
    TableDemoComponent,
    SelectDemoComponent,

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
