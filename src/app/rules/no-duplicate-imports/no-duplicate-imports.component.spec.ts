import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDuplicateImportsComponent } from './no-duplicate-imports.component';

describe('NoDuplicateImportsComponent', () => {
  let component: NoDuplicateImportsComponent;
  let fixture: ComponentFixture<NoDuplicateImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoDuplicateImportsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoDuplicateImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
