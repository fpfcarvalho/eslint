import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valid-typeof',
  templateUrl: './valid-typeof.component.html',
  styleUrls: ['./valid-typeof.component.scss'],
})
export class ValidTypeofComponent implements OnInit {

  ngOnInit() {
    typeof foo === "strnig";
    typeof foo == "undefimed";
    typeof bar != "nunber";
    typeof bar !== "fucntion";
  }
}
