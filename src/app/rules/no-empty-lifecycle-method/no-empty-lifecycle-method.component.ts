import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-empty-lifecycle-method',
  templateUrl: './no-empty-lifecycle-method.component.html',
  styleUrls: ['./no-empty-lifecycle-method.component.scss'],
})
export class NoEmptyLifecycleMethodComponent implements OnInit, AfterContentChecked {

  ngOnInit() {
  }

  ngAfterContentChecked() {}

}
