import { NgModule } from '@angular/core';
import { RuComponent } from './ru.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { TableColumnComponent } from './table-column/table-column.component';

@NgModule({
  declarations: [RuComponent, ButtonComponent, PanelComponent, InputComponent, TableComponent, TableColumnComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [RuComponent, ButtonComponent, PanelComponent, InputComponent]
})
export class RuModule { }
