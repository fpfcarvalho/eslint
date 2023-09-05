import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSelectorComponent } from './directive-selector.component';

describe('DirectiveSelectorComponent', () => {
  let component: DirectiveSelectorComponent;
  let fixture: ComponentFixture<DirectiveSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectiveSelectorComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
