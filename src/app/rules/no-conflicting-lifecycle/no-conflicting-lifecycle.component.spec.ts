import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoConflictingLifecycleComponent } from './no-conflicting-lifecycle.component';

describe('NoConflictingLifecycleComponent', () => {
  let component: NoConflictingLifecycleComponent;
  let fixture: ComponentFixture<NoConflictingLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoConflictingLifecycleComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoConflictingLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
