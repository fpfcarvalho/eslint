import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMultiSpacesComponent } from './no-multi-spaces.component';

describe('NoMultiSpacesComponent', () => {
  let component: NoMultiSpacesComponent;
  let fixture: ComponentFixture<NoMultiSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoMultiSpacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoMultiSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
