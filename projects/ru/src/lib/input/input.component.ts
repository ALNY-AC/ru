import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ru-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input('prefix-icon') prefixIcon: string = '';
  @Input('suffix-icon') suffixIcon: string = '';
  @Output('suffix-click') suffixIconClick: EventEmitter<any> = new EventEmitter<any>()  // handle on the input icon
  @Output('prefix-click') prefixIconClick: EventEmitter<any> = new EventEmitter<any>()  // handle on the input icon

  @Input() model = '';
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()


  constructor() { }

  ngOnInit() {
  }

  handleInput(val) {
    this.model = val;
    this.modelChange.emit(val);
  }

}
