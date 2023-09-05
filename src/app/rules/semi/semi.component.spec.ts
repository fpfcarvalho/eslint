import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiComponent } from './semi.component';

describe('SemiComponent', () => {
  let component: SemiComponent;
  let fixture: ComponentFixture<SemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemiComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
