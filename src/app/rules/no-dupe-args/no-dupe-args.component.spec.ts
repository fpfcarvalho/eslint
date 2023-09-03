import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDupeArgsComponent } from './no-dupe-args.component';

describe('NoDupeArgsComponent', () => {
  let component: NoDupeArgsComponent;
  let fixture: ComponentFixture<NoDupeArgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoDupeArgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDupeArgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
