import { NgModule } from '@angular/core';
import { RuComponent } from './ru.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { ThComponent } from './th/th.component';
import { TdComponent } from './td/td.component';
import { TrComponent } from './tr/tr.component';
import { DialogComponent } from './dialog/dialog.component';
import { SelectComponent } from './select/select.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    RuComponent,
    ButtonComponent,
    PanelComponent,
    InputComponent,
    TableComponent,
    ThComponent,
    TdComponent,
    TrComponent,
    DialogComponent,
    SelectComponent,
    OptionComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    RuComponent,
    ButtonComponent,
    PanelComponent,
    InputComponent,
    TableComponent,
    ThComponent,
    TdComponent,
    TrComponent,
    DialogComponent,
    SelectComponent,
    OptionComponent
  ]
})
export class RuModule { }
