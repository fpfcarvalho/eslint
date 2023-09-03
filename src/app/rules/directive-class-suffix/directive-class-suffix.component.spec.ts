import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveClassSuffixComponent } from './directive-class-suffix.component';

describe('DirectiveClassSuffixComponent', () => {
  let component: DirectiveClassSuffixComponent;
  let fixture: ComponentFixture<DirectiveClassSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveClassSuffixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveClassSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
