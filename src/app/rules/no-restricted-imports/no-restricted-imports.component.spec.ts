import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRestrictedImportsComponent } from './no-restricted-imports.component';

describe('NoRestrictedImportsComponent', () => {
  let component: NoRestrictedImportsComponent;
  let fixture: ComponentFixture<NoRestrictedImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoRestrictedImportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoRestrictedImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
