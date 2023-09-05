import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'exo-no-conflicting-lifecycle',
  templateUrl: './no-conflicting-lifecycle.component.html',
  styleUrls: ['./no-conflicting-lifecycle.component.scss'],
})
export class NoConflictingLifecycleComponent implements OnChanges {
  test() {}
  test1() {}
  ngOnChanges() {}
}
