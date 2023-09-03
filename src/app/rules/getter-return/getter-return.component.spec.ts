import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterReturnComponent } from './getter-return.component';

describe('GetterReturnComponent', () => {
  let component: GetterReturnComponent;
  let fixture: ComponentFixture<GetterReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetterReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetterReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
