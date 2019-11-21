import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionParentPage } from './inscription-parent.page';

describe('InscriptionParentPage', () => {
  let component: InscriptionParentPage;
  let fixture: ComponentFixture<InscriptionParentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionParentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
