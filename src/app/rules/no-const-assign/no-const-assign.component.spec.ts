import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoConstAssignComponent } from './no-const-assign.component';

describe('NoConstAssignComponent', () => {
  let component: NoConstAssignComponent;
  let fixture: ComponentFixture<NoConstAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoConstAssignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoConstAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
