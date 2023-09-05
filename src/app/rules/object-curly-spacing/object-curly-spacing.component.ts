import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-curly-spacing',
  templateUrl: './object-curly-spacing.component.html',
  styleUrls: ['./object-curly-spacing.component.scss']
})
export class ObjectCurlySpacingComponent implements OnInit {

  ngOnInit() {
    const obj1 = {'foo': 'bar'};
    const obj2 = {'foo': 'bar' };
    const obj3 = { baz: {'foo': 'qux'}, bar};
    const obj4 = {baz: { 'foo': 'qux' }, bar};
    const obj5 = {'foo': 'bar'
    };
    const obj6 = {
      'foo':'bar'};
    const {x} = y;
  }

}
