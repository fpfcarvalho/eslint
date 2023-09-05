import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-bitwise',
  templateUrl: './no-bitwise.component.html',
  styleUrls: ['./no-bitwise.component.scss'],
})
export class NoBitwiseComponent implements OnInit {

  ngOnInit() {
    const a = y | z;

    const b = y & z;

    const c = y << z;

    const d = y >> z;
  }

}
