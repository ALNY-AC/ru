import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ru-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() title: string = '';
  @Input() shadow: string = 'always';
  constructor() { }

  ngOnInit() {
  }

}
