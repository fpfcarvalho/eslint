import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSparseArraysComponent } from './no-sparse-arrays.component';

describe('NoSparseArraysComponent', () => {
  let component: NoSparseArraysComponent;
  let fixture: ComponentFixture<NoSparseArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoSparseArraysComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSparseArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
