import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-multi-spaces',
  templateUrl: './no-multi-spaces.component.html',
  styleUrls: ['./no-multi-spaces.component.scss'],
})
export class NoMultiSpacesComponent implements OnInit {

  ngOnInit() {
    const a = 1;

    if(foo === "bar") {}

    const arr = [ 1, 2 ];

    const x = a ? b: c;
  }

}
