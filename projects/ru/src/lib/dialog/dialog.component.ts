import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ru-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('dialog') dialog: ElementRef<HTMLDialogElement>;
  @Input() title: string = '';
  @Input() width: string = 'auto';
  @Input() show: boolean = false;
  @Input('mask-close') maskClose: boolean = true;

  @Output() showChange: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }
  hide() {
    this.showChange.emit(false);
  }
  ngOnInit() {
  }

}
