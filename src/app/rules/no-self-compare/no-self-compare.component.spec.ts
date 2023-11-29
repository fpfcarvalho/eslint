import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSelfCompareComponent } from './no-self-compare.component';

describe('NoSelfCompareComponent', () => {
  let component: NoSelfCompareComponent;
  let fixture: ComponentFixture<NoSelfCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoSelfCompareComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoSelfCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
