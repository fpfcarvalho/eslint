import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsePipeTransformInterfaceComponent } from './use-pipe-transform-interface.component';

describe('UsePipeTransformInterfaceComponent', () => {
  let component: UsePipeTransformInterfaceComponent;
  let fixture: ComponentFixture<UsePipeTransformInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsePipeTransformInterfaceComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UsePipeTransformInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
