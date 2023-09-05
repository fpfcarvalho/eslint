import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-empty',
  templateUrl: './no-empty.component.html',
  styleUrls: ['./no-empty.component.scss'],
})
export class NoEmptyComponent implements OnInit {

  ngOnInit() {
    if (foo) {
    }

    while (foo) {
    }

    switch(foo) {
    }
  }

}
