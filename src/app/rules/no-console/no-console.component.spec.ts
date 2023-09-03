import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoConsoleComponent } from './no-console.component';

describe('NoConsoleComponent', () => {
  let component: NoConsoleComponent;
  let fixture: ComponentFixture<NoConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
