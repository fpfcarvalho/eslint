import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-self-compare',
  templateUrl: './no-self-compare.component.html',
  styleUrls: ['./no-self-compare.component.scss'],
})
export class NoSelfCompareComponent implements OnInit {

  ngOnInit() {

    let x = 10;
    if (x === x) {
      x = 20;
    }
  }

}
