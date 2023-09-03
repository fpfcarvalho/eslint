import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoThrowLiteralComponent } from './no-throw-literal.component';

describe('NoThrowLiteralComponent', () => {
  let component: NoThrowLiteralComponent;
  let fixture: ComponentFixture<NoThrowLiteralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoThrowLiteralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoThrowLiteralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
