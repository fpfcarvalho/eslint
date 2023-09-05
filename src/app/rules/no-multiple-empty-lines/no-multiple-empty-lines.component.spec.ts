import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMultipleEmptyLinesComponent } from './no-multiple-empty-lines.component';

describe('NoMultipleEmptyLinesComponent', () => {
  let component: NoMultipleEmptyLinesComponent;
  let fixture: ComponentFixture<NoMultipleEmptyLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoMultipleEmptyLinesComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoMultipleEmptyLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
