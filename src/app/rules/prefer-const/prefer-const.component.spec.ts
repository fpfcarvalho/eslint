import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferConstComponent } from './prefer-const.component';

describe('PreferConstComponent', () => {
  let component: PreferConstComponent;
  let fixture: ComponentFixture<PreferConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferConstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
