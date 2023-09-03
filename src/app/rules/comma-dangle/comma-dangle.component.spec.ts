import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommaDangleComponent } from './comma-dangle.component';

describe('CommaDangleComponent', () => {
  let component: CommaDangleComponent;
  let fixture: ComponentFixture<CommaDangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommaDangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommaDangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
