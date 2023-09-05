import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLinesComponent } from './max-lines.component';

describe('MaxLinesComponent', () => {
  let component: MaxLinesComponent;
  let fixture: ComponentFixture<MaxLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxLinesComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
