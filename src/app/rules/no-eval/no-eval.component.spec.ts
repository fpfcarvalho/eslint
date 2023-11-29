import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEvalComponent } from './no-eval.component';

describe('NoEvalComponent', () => {
  let component: NoEvalComponent;
  let fixture: ComponentFixture<NoEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoEvalComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
