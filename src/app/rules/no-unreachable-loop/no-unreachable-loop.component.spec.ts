import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnreachableLoopComponent } from './no-unreachable-loop.component';

describe('NoUnreachableLoopComponent', () => {
  let component: NoUnreachableLoopComponent;
  let fixture: ComponentFixture<NoUnreachableLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoUnreachableLoopComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUnreachableLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
