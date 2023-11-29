import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDupeElseIfComponent } from './no-dupe-else-if.component';

describe('NoDupeElseIfComponent', () => {
  let component: NoDupeElseIfComponent;
  let fixture: ComponentFixture<NoDupeElseIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoDupeElseIfComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoDupeElseIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
