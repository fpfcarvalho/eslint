import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-bracket-spacing',
  templateUrl: './array-bracket-spacing.component.html',
  styleUrls: ['./array-bracket-spacing.component.scss'],
})
export class ArrayBracketSpacingComponent implements OnInit {

  ngOnInit(): void {
    const oia1 = [{ 'foo': 'bar' }];
    const oia2 = [{
      'foo': 'bar',
    }];
    const aia1 = [[ 1, 2 ], 2, 3, 4 ];
    const aia2 = [[ 1, 2 ], 2, [ 3, 4 ]];
    const sv1 = ['foo'];
    const sv2 = ['foo'];
    const sv3 = ['foo'];
  }

}
