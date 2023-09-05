import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAlertComponent } from './no-alert.component';

describe('NoAlertComponent', () => {
  let component: NoAlertComponent;
  let fixture: ComponentFixture<NoAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoAlertComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
