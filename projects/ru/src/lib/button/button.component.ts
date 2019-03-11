import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ru-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() round: boolean = false;
  @Input() plain: boolean = false;
  @Input() disabled: boolean = false;
  @Input() ghost: boolean = false;
  @Input() type: string = 'default';

  ngOnInit() {
  }

}
