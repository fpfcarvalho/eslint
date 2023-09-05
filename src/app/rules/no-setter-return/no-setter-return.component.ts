import { Component } from '@angular/core';

@Component({
  selector: 'exo-no-setter-return',
  templateUrl: './no-setter-return.component.html',
  styleUrls: ['./no-setter-return.component.scss'],
})
export class NoSetterReturnComponent {
  set a(value: number) {
    this.val = value * 2;
  }

  val = 0;
}
