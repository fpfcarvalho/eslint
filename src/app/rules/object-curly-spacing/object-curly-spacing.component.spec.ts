import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCurlySpacingComponent } from './object-curly-spacing.component';

describe('ObjectCurlySpacingComponent', () => {
  let component: ObjectCurlySpacingComponent;
  let fixture: ComponentFixture<ObjectCurlySpacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectCurlySpacingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectCurlySpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
