import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogDemoComponent implements OnInit {
  show1 = false;
  show2 = false;
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
  ];
  demo2 = `
<ru-dialog width="800px" title="对话框" [(show)]="show1">
  内容区
  <div slot="footer" class="text-right">
  页脚区
      <ru-button type="green">确定</ru-button>
      <ru-button (click)="show1=false">关闭</ru-button>
  </div>
</ru-dialog>
  `;
  fields = [
    '参数',
    '说明',
    '类型',
    '可选值',
    '默认值',
  ];
  propList = [
    [
      'show',
      '是否显示模态框',
      'boolean',
      'true | false',
      'false',
    ],
    [

      'title',
      '模态框的标题',
      'string',
      '--',
      '-',
    ],
    [
      'width',
      '模态框的宽度',
      'string',
      '80%|300px',
      '80%',
    ],
    [
      'mask-close',
      '是否允许点击蒙层关闭',
      'boolean',
      'true|false',
      'true',
    ]

  ]
  constructor() { }

  ngOnInit() {
  }

}
