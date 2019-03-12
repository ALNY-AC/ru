import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss']
})
export class ButtonDemoComponent implements OnInit {
  demo = `
  <ru-button>默认按钮</ru-button>
  <ru-button type="green">绿色</ru-button>
  <ru-button type="text">文字按钮</ru-button>
  <ru-button type="green" [plain]="true">绿色</ru-button>
  <ru-button type="green" [ghost]="true" [plain]="true">幽灵按钮</ru-button>
  <ru-button type="green" [ghost]="true" [round]="true" [plain]="true">幽灵按钮</ru-button>
  <ru-button [round]="true">圆角按钮</ru-button>
  <ru-button [disabled]="true">禁用样式</ru-button>`;
  constructor() { }

  ngOnInit() {
  }

}
