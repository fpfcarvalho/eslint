import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-camelcase',
  templateUrl: './camelcase.component.html',
  styleUrls: ['./camelcase.component.scss'],
})
export class CamelcaseComponent implements OnInit {

  ngOnInit() {
    const myFavoriteColor = '#112C85';
    const obj = {
      myPref: 1,
    };
    obj.doSomething = function() {
      // ...
    };
    const { categoryId = 1 } = query;
    const { foo: noCamelcased } = bar;
    const { foo: barBaz = 1 } = quz;
  }

}
