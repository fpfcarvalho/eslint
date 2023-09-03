import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSetterReturnComponent } from './no-setter-return.component';

describe('NoSetterReturnComponent', () => {
  let component: NoSetterReturnComponent;
  let fixture: ComponentFixture<NoSetterReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSetterReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSetterReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
