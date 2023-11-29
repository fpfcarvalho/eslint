import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxStatementsComponent } from './max-statements.component';

describe('MaxStatementsComponent', () => {
  let component: MaxStatementsComponent;
  let fixture: ComponentFixture<MaxStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxStatementsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MaxStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
