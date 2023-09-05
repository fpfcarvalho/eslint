import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-empty-lifecycle-method',
  templateUrl: './no-empty-lifecycle-method.component.html',
  styleUrls: ['./no-empty-lifecycle-method.component.scss'],
})
export class NoEmptyLifecycleMethodComponent implements OnInit, AfterContentChecked {

  foo: string | undefined;

  ngOnInit() {
    this.foo = 'text1';
  }

  ngAfterContentChecked() {
    this.foo = 'text2';
  }

}
