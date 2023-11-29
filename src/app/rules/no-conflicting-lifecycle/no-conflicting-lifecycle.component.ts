import { Component } from '@angular/core';

@Component({
  selector: 'exo-no-conflicting-lifecycle',
  templateUrl: './no-conflicting-lifecycle.component.html',
  styleUrls: ['./no-conflicting-lifecycle.component.scss'],
})
export class NoConflictingLifecycleComponent {
  test() {
    // do nothing
  }
  test1() {
    // do nothing
  }
}
