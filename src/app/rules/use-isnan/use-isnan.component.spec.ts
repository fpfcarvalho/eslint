import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseIsnanComponent } from './use-isnan.component';

describe('UseIsnanComponent', () => {
  let component: UseIsnanComponent;
  let fixture: ComponentFixture<UseIsnanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseIsnanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseIsnanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
