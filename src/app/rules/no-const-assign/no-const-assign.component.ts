import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-const-assign',
  templateUrl: './no-const-assign.component.html',
  styleUrls: ['./no-const-assign.component.scss'],
})
export class NoConstAssignComponent implements OnInit {

  ngOnInit() {
    let a = 0;
    a = 1;

    let b = 0;
    b += 1;

    let c = 0;
    ++c;
  }

}
