import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-demo',
  templateUrl: './panel-demo.component.html',
  styleUrls: ['./panel-demo.component.scss']
})
export class PanelDemoComponent implements OnInit {

  demo2 = `
  <ru-panel title="在里面放入其他组件" shadow="always">
    <ul>
        <li>1、海底两万里</li>
        <li>2、神秘岛</li>
        <li>3、飞向月球</li>
    </ul>
  </ru-panel>
  <ru-panel title="始终显示" shadow="always"></ru-panel>
  <ru-panel title="鼠标进入显示" shadow="hover"></ru-panel>
  <ru-panel title="始终不显示" shadow="never"></ru-panel>
  <ru-panel></ru-panel>
  `;
  constructor() { }

  ngOnInit() {
  }

}
