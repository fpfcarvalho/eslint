import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDupeClassMembersComponent } from './no-dupe-class-members.component';

describe('NoDupeClassMembersComponent', () => {
  let component: NoDupeClassMembersComponent;
  let fixture: ComponentFixture<NoDupeClassMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoDupeClassMembersComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDupeClassMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
