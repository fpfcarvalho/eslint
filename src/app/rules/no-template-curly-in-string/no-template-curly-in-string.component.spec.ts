import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTemplateCurlyInStringComponent } from './no-template-curly-in-string.component';

describe('NoTemplateCurlyInStringComponent', () => {
  let component: NoTemplateCurlyInStringComponent;
  let fixture: ComponentFixture<NoTemplateCurlyInStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoTemplateCurlyInStringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTemplateCurlyInStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
