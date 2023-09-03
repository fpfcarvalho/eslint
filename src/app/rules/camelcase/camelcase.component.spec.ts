import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelcaseComponent } from './camelcase.component';

describe('CamelcaseComponent', () => {
  let component: CamelcaseComponent;
  let fixture: ComponentFixture<CamelcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamelcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamelcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
