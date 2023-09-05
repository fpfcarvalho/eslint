import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-alert',
  templateUrl: './no-alert.component.html',
  styleUrls: ['./no-alert.component.scss'],
})
export class NoAlertComponent implements OnInit {

  ngOnInit() {
    alert("here!");

    confirm("Are you sure?");

    prompt("What's your name?", "John Doe");
  }

}
