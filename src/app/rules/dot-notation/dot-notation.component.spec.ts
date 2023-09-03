import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNotationComponent } from './dot-notation.component';

describe('DotNotationComponent', () => {
  let component: DotNotationComponent;
  let fixture: ComponentFixture<DotNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DotNotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
