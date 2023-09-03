import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEmptyLifecycleMethodComponent } from './no-empty-lifecycle-method.component';

describe('NoEmptyLifecycleMethodComponent', () => {
  let component: NoEmptyLifecycleMethodComponent;
  let fixture: ComponentFixture<NoEmptyLifecycleMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEmptyLifecycleMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEmptyLifecycleMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
