import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUseBeforeDefineComponent } from './no-use-before-define.component';

describe('NoUseBeforeDefineComponent', () => {
  let component: NoUseBeforeDefineComponent;
  let fixture: ComponentFixture<NoUseBeforeDefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoUseBeforeDefineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUseBeforeDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
