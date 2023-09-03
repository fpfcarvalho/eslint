import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTrailingSpacesComponent } from './no-trailing-spaces.component';

describe('NoTrailingSpacesComponent', () => {
  let component: NoTrailingSpacesComponent;
  let fixture: ComponentFixture<NoTrailingSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoTrailingSpacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTrailingSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
