import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent implements OnInit {
  demo3Str = 'ru-input';
  demo3 = `
  <ru-input prefix-icon="fa fa-calendar" suffix-icon="fa fa-angle-down" (suffix-click)="test('后')" (prefix-click)="test('前')">
  </ru-input>
  <ru-input suffix-icon="fa fa-angle-down"></ru-input>
  <ru-input prefix-icon="fa fa-calendar"></ru-input>
  <ru-input></ru-input>
  `
  constructor() { }

  ngOnInit() {
  }

}
