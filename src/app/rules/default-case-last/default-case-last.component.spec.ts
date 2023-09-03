import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCaseLastComponent } from './default-case-last.component';

describe('DefaultCaseLastComponent', () => {
  let component: DefaultCaseLastComponent;
  let fixture: ComponentFixture<DefaultCaseLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultCaseLastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCaseLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
