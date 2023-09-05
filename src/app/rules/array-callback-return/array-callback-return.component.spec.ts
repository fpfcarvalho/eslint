import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCallbackReturnComponent } from './array-callback-return.component';

describe('ArrayCallbackReturnComponent', () => {
  let component: ArrayCallbackReturnComponent;
  let fixture: ComponentFixture<ArrayCallbackReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayCallbackReturnComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayCallbackReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
