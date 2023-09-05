import { Component, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-no-conflicting-lifecycle',
  templateUrl: './no-conflicting-lifecycle.component.html',
  styleUrls: ['./no-conflicting-lifecycle.component.scss']
})
export class NoConflictingLifecycleComponent implements DoCheck, OnChanges {
  test() {}
  test1() {}
  ngDoCheck() {}
  ngOnChanges() {}
}
