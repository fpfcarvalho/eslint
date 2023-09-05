import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camelcase',
  templateUrl: './camelcase.component.html',
  styleUrls: ['./camelcase.component.scss'],
})
export class CamelcaseComponent implements OnInit {

  ngOnInit() {
    const my_favorite_color = '#112C85';
    const obj = {
      my_pref: 1,
    };
    obj.do_something = function() {
      // ...
    };
    const { category_id = 1 } = query;
    const { foo: no_camelcased } = bar;
    const { foo: bar_baz = 1 } = quz;
  }

}
