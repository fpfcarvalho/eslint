import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'exo-use-lifecycle-interface',
  templateUrl: './use-lifecycle-interface.component.html',
  styleUrls: ['./use-lifecycle-interface.component.scss'],
})
export class UseLifecycleInterfaceComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit {

  ngOnInit() {}

  ngOnDestroy() {}

  ngAfterViewChecked() {}

  ngAfterViewInit() {}

}
