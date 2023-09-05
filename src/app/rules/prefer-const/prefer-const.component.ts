import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prefer-const',
  templateUrl: './prefer-const.component.html',
  styleUrls: ['./prefer-const.component.scss']
})
export class PreferConstComponent implements OnInit {

  ngOnInit() {

    let field = 3;
    console.log(field);

    for (let i in [ 1, 2, 3 ]) {
      console.log(i);
    }
  }

}
