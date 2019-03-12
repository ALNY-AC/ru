import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
