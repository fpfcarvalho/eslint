import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDupeKeysComponent } from './no-dupe-keys.component';

describe('NoDupeKeysComponent', () => {
  let component: NoDupeKeysComponent;
  let fixture: ComponentFixture<NoDupeKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoDupeKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDupeKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
