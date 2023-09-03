import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnsafeOptionalChainingComponent } from './no-unsafe-optional-chaining.component';

describe('NoUnsafeOptionalChainingComponent', () => {
  let component: NoUnsafeOptionalChainingComponent;
  let fixture: ComponentFixture<NoUnsafeOptionalChainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoUnsafeOptionalChainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUnsafeOptionalChainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
