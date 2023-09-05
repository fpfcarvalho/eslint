import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-trailing-spaces',
  templateUrl: './no-trailing-spaces.component.html',
  styleUrls: ['./no-trailing-spaces.component.scss']
})
export class NoTrailingSpacesComponent implements OnInit {

  ngOnInit() {
    const field1 = 'value';

    const field2 = 'value2'; // this is a comment
  }

}
