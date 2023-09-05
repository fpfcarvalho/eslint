import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBitwiseComponent } from './no-bitwise.component';

describe('NoBitwiseComponent', () => {
  let component: NoBitwiseComponent;
  let fixture: ComponentFixture<NoBitwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoBitwiseComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoBitwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
