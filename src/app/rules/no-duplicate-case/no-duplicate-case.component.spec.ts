import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDuplicateCaseComponent } from './no-duplicate-case.component';

describe('NoDuplicateCaseComponent', () => {
  let component: NoDuplicateCaseComponent;
  let fixture: ComponentFixture<NoDuplicateCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDuplicateCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDuplicateCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
