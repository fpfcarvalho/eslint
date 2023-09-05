import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-lifecycle-interface',
  templateUrl: './use-lifecycle-interface.component.html',
  styleUrls: ['./use-lifecycle-interface.component.scss'],
})
export class UseLifecycleInterfaceComponent implements OnInit {

  ngOnInit() {}

  ngOnDestroy() {}

  ngAfterViewChecked() {}

  ngAfterViewInit() {}

}
