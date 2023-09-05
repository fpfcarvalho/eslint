import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEmptyComponent } from './no-empty.component';

describe('NoEmptyComponent', () => {
  let component: NoEmptyComponent;
  let fixture: ComponentFixture<NoEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoEmptyComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
