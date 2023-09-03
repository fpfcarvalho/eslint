import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidTypeofComponent } from './valid-typeof.component';

describe('ValidTypeofComponent', () => {
  let component: ValidTypeofComponent;
  let fixture: ComponentFixture<ValidTypeofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidTypeofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidTypeofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
