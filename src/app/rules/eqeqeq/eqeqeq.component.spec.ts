import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqeqeqComponent } from './eqeqeq.component';

describe('EqeqeqComponent', () => {
  let component: EqeqeqComponent;
  let fixture: ComponentFixture<EqeqeqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EqeqeqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqeqeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
