import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoWhitespaceBeforePropertyComponent } from './no-whitespace-before-property.component';

describe('NoWhitespaceBeforePropertyComponent', () => {
  let component: NoWhitespaceBeforePropertyComponent;
  let fixture: ComponentFixture<NoWhitespaceBeforePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoWhitespaceBeforePropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoWhitespaceBeforePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
