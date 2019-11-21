import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginParentPage } from './login-parent.page';

describe('LoginParentPage', () => {
  let component: LoginParentPage;
  let fixture: ComponentFixture<LoginParentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginParentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
