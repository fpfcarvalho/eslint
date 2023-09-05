import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-const-assign',
  templateUrl: './no-const-assign.component.html',
  styleUrls: ['./no-const-assign.component.scss']
})
export class NoConstAssignComponent implements OnInit {

  ngOnInit() {
    const a = 0;
    a = 1;

    const b = 0;
    b += 1;

    const c = 0;
    ++c;
  }

}
