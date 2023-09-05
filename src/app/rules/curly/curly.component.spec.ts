import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurlyComponent } from './curly.component';

describe('CurlyComponent', () => {
  let component: CurlyComponent;
  let fixture: ComponentFixture<CurlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurlyComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
