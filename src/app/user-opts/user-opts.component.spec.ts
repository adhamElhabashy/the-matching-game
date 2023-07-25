import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptsComponent } from './user-opts.component';

describe('UserOptsComponent', () => {
  let component: UserOptsComponent;
  let fixture: ComponentFixture<UserOptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOptsComponent]
    });
    fixture = TestBed.createComponent(UserOptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
