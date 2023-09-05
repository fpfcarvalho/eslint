import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicitFunctionReturnTypeComponent } from './explicit-function-return-type.component';

describe('ExplicitFunctionReturnTypeComponent', () => {
  let component: ExplicitFunctionReturnTypeComponent;
  let fixture: ComponentFixture<ExplicitFunctionReturnTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplicitFunctionReturnTypeComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplicitFunctionReturnTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
