import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoExtraSemiComponent } from './no-extra-semi.component';

describe('NoExtraSemiComponent', () => {
  let component: NoExtraSemiComponent;
  let fixture: ComponentFixture<NoExtraSemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoExtraSemiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoExtraSemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
