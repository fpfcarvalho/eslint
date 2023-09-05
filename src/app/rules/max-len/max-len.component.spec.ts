import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLenComponent } from './max-len.component';

describe('MaxLenComponent', () => {
  let component: MaxLenComponent;
  let fixture: ComponentFixture<MaxLenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxLenComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxLenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
