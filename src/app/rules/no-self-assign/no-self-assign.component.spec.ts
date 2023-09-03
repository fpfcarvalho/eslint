import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSelfAssignComponent } from './no-self-assign.component';

describe('NoSelfAssignComponent', () => {
  let component: NoSelfAssignComponent;
  let fixture: ComponentFixture<NoSelfAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSelfAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSelfAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
