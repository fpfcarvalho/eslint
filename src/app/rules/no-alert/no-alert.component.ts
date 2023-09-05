import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-alert',
  templateUrl: './no-alert.component.html',
  styleUrls: ['./no-alert.component.scss'],
})
export class NoAlertComponent implements OnInit {

  ngOnInit() {
    customAlert("here!"); // custom library

    customConfirm("Are you sure?"); // custom library

    customPrompt("What's your name?", "John Doe"); // custom library
  }

}
