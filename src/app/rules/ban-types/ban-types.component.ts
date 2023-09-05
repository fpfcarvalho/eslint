import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ban-types',
  templateUrl: './ban-types.component.html',
  styleUrls: ['./ban-types.component.scss']
})
export class BanTypesComponent implements OnInit {

  ngOnInit() {
    const str: string = 'foo';
    const bool: boolean = true;
    const num: number = 1;
    const symb: symbol = Symbol('foo');
    const bigInt: bigint = 1n;

    const func: () => number = () => 1;

    const lowerObj: object = {};
    const capitalObj: { a: string } = { a: 'string' };

    const curly1: number = 1;
    const curly2: Record<'a', string> = { a: 'string' };
  }

}
