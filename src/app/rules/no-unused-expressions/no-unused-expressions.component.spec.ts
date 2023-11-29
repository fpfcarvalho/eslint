import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnusedExpressionsComponent } from './no-unused-expressions.component';

describe('NoUnusedExpressionsComponent', () => {
  let component: NoUnusedExpressionsComponent;
  let fixture: ComponentFixture<NoUnusedExpressionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoUnusedExpressionsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoUnusedExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
