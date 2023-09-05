import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-debugger',
  templateUrl: './no-debugger.component.html',
  styleUrls: ['./no-debugger.component.scss'],
})
export class NoDebuggerComponent implements OnInit {

  ngOnInit() {
    debugger;
    const a = 'Exads';
  }

}
