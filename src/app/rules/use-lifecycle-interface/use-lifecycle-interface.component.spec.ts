import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseLifecycleInterfaceComponent } from './use-lifecycle-interface.component';

describe('UseLifecycleInterfaceComponent', () => {
  let component: UseLifecycleInterfaceComponent;
  let fixture: ComponentFixture<UseLifecycleInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseLifecycleInterfaceComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UseLifecycleInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
