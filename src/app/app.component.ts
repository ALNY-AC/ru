import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  demo1 = `
  <ru-button>默认按钮</ru-button>
  <ru-button type="green">绿色</ru-button>
  <ru-button type="text">文字按钮</ru-button>
  <ru-button type="green" [plain]="true">绿色</ru-button>
  <ru-button type="green" [ghost]="true" [plain]="true">幽灵按钮</ru-button>
  <ru-button type="green" [ghost]="true" [round]="true" [plain]="true">幽灵按钮</ru-button>
  <ru-button [round]="true">圆角按钮</ru-button>
  <ru-button [disabled]="true">禁用样式</ru-button>`;
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
  demo3 = `
  <ru-input prefix-icon="fa fa-calendar" suffix-icon="fa fa-angle-down" (suffix-click)="test('后')" (prefix-click)="test('前')">
  </ru-input>
  <ru-input suffix-icon="fa fa-angle-down"></ru-input>
  <ru-input prefix-icon="fa fa-calendar"></ru-input>
  <ru-input></ru-input>
  `
  demo3Str = 'ru-input';
  demo4List = [
    { title: '海底两万里', name: '凡尔纳' },
    { title: '神秘岛', name: '凡尔纳' },
    { title: '童年', name: '高尔基' },
    { title: '骆驼祥子', name: '鲁迅' },
  ];
  demo4HeadList = [
    { name: 'id' },
    { name: '名字' },
    { name: '作者' },
  ]
  test(e) {
    console.warn(e);
  }
}
