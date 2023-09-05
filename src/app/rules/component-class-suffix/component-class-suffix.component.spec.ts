import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentClassSuffixComponent } from './component-class-suffix.component';

describe('ComponentClassSuffixComponent', () => {
  let component: ComponentClassSuffixComponent;
  let fixture: ComponentFixture<ComponentClassSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentClassSuffixComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentClassSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
