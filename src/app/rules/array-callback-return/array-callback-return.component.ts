import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-callback-return',
  templateUrl: './array-callback-return.component.html',
  styleUrls: ['./array-callback-return.component.scss'],
})
export class ArrayCallbackReturnComponent implements OnInit {

  ngOnInit() {
    const myArray: any[] = [{ prop: 'prop1' }, { prop: 'prop2' }, { prop: 'prop3' }];
    const undefAllTheThings = myArray.map(item => {
      item.prop = 'propX';
    });

    const indexMap = myArray.reduce(function(memo, item, index) {
      memo[index] = item;
    }, {});

    const foo = Array.from(myArray, function(node) {
      if (node.prop === "DIV") {
        return true;
      }
    });
  }
}
