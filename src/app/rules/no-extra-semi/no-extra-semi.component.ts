import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-extra-semi',
  templateUrl: './no-extra-semi.component.html',
  styleUrls: ['./no-extra-semi.component.scss'],
})
export class NoExtraSemiComponent implements OnInit {
  field;;

  ngOnInit() {
    const x = 5;;
  };

}
