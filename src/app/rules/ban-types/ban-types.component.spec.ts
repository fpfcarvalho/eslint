import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanTypesComponent } from './ban-types.component';

fdescribe('BanTypesComponent', () => {
  let component: BanTypesComponent;
  let fixture: ComponentFixture<BanTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanTypesComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BanTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
