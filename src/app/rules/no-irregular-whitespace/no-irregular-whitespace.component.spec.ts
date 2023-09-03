import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoIrregularWhitespaceComponent } from './no-irregular-whitespace.component';

describe('NoIrregularWhitespaceComponent', () => {
  let component: NoIrregularWhitespaceComponent;
  let fixture: ComponentFixture<NoIrregularWhitespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoIrregularWhitespaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoIrregularWhitespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
