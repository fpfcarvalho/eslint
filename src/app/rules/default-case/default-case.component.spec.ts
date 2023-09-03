import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCaseComponent } from './default-case.component';

describe('DefaultCaseComponent', () => {
  let component: DefaultCaseComponent;
  let fixture: ComponentFixture<DefaultCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
