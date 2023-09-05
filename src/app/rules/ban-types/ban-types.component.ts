import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ban-types',
  templateUrl: './ban-types.component.html',
  styleUrls: ['./ban-types.component.scss']
})
export class BanTypesComponent implements OnInit {

  ngOnInit() {
    const str: String = 'foo';
    const bool: Boolean = true;
    const num: Number = 1;
    const symb: Symbol = Symbol('foo');
    const bigInt: BigInt = 1n;

    const func: Function = () => 1;

    const lowerObj: Object = {};
    const capitalObj: Object = { a: 'string' };

    const curly1: {} = 1;
    const curly2: {} = { a: 'string' };
  }

}
