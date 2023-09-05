import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLonelyIfComponent } from './no-lonely-if.component';

describe('NoLonelyIfComponent', () => {
  let component: NoLonelyIfComponent;
  let fixture: ComponentFixture<NoLonelyIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoLonelyIfComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoLonelyIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
