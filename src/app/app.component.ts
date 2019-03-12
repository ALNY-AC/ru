import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeNav = '';
  navList = [
    { title: 'ru-button 按钮', path: '/button-demo' },
    { title: 'ru-input 输入框', path: '/input-demo' },
    { title: 'ru-panel 面板', path: '/panel-demo' },
    { title: 'ru-table 表格', path: '/table-demo' },
    { title: 'ru-dialog 对话框', path: '/dialog-demo' },
    { title: 'ru-select 选择框', path: '/select-demo' },
  ]

  constructor(private location: PlatformLocation) {

  }
  test(e) {
    console.warn(e);
  }
  ngOnInit() {
    this.activeNav = this.location.pathname;
  }
}
