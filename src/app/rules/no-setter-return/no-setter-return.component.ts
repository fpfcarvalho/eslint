import { Component } from '@angular/core';

@Component({
  selector: 'app-no-setter-return',
  templateUrl: './no-setter-return.component.html',
  styleUrls: ['./no-setter-return.component.scss'],
})
export class NoSetterReturnComponent {
  set a(value: number) {
    this.val = value * 2;
    return this.val;
  }

  val = 0;
}
