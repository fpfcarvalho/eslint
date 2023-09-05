import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-console',
  templateUrl: './no-console.component.html',
  styleUrls: ['./no-console.component.scss'],
})
export class NoConsoleComponent implements OnInit {

  ngOnInit() {
    console.log("Log a debug level message.");
    console.warn("Log a warn level message.");
    console.error("Log an error level message.");
    console.log = foo();
  }

}
