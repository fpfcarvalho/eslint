import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireJsdocComponent } from './require-jsdoc.component';

describe('RequireJsdocComponent', () => {
  let component: RequireJsdocComponent;
  let fixture: ComponentFixture<RequireJsdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequireJsdocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequireJsdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
