import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDebuggerComponent } from './no-debugger.component';

describe('NoDebuggerComponent', () => {
  let component: NoDebuggerComponent;
  let fixture: ComponentFixture<NoDebuggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoDebuggerComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
