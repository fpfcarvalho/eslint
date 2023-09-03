import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnusedVarsComponent } from './no-unused-vars.component';

describe('NoUnusedVarsComponent', () => {
  let component: NoUnusedVarsComponent;
  let fixture: ComponentFixture<NoUnusedVarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoUnusedVarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUnusedVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
