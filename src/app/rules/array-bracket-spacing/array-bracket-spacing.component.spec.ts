import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBracketSpacingComponent } from './array-bracket-spacing.component';

describe('ArrayBracketSpacingComponent', () => {
  let component: ArrayBracketSpacingComponent;
  let fixture: ComponentFixture<ArrayBracketSpacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayBracketSpacingComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArrayBracketSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
