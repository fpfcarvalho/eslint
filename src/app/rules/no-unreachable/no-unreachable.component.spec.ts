import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnreachableComponent } from './no-unreachable.component';

describe('NoUnreachableComponent', () => {
  let component: NoUnreachableComponent;
  let fixture: ComponentFixture<NoUnreachableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoUnreachableComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoUnreachableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
