import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCompareNegZeroComponent } from './no-compare-neg-zero.component';

describe('NoCompareNegZeroComponent', () => {
  let component: NoCompareNegZeroComponent;
  let fixture: ComponentFixture<NoCompareNegZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoCompareNegZeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCompareNegZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
