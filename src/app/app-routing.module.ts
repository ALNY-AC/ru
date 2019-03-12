import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogDemoComponent } from './pages/dialog-demo/dialog-demo.component';
import { ButtonDemoComponent } from './pages/button-demo/button-demo.component';
import { TableDemoComponent } from './pages/table-demo/table-demo.component';
import { InputDemoComponent } from './pages/input-demo/input-demo.component';
import { PanelDemoComponent } from './pages/panel-demo/panel-demo.component';
import { SelectDemoComponent } from './pages/select-demo/select-demo.component';

const routes: Routes = [
  { path: "dialog-demo", component: DialogDemoComponent },
  { path: "input-demo", component: InputDemoComponent },
  { path: "panel-demo", component: PanelDemoComponent },
  { path: "button-demo", component: ButtonDemoComponent },
  { path: "table-demo", component: TableDemoComponent },
  { path: "select-demo", component: SelectDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
