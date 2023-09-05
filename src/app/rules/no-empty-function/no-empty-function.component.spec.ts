import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEmptyFunctionComponent } from './no-empty-function.component';

describe('NoEmptyFunctionComponent', () => {
  let component: NoEmptyFunctionComponent;
  let fixture: ComponentFixture<NoEmptyFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoEmptyFunctionComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoEmptyFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
