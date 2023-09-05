import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLinesPerFunctionComponent } from './max-lines-per-function.component';

describe('MaxLinesPerFunctionComponent', () => {
  let component: MaxLinesPerFunctionComponent;
  let fixture: ComponentFixture<MaxLinesPerFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxLinesPerFunctionComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MaxLinesPerFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
