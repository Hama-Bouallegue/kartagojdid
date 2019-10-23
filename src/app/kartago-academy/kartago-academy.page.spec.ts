import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartagoAcademyPage } from './kartago-academy.page';

describe('KartagoAcademyPage', () => {
  let component: KartagoAcademyPage;
  let fixture: ComponentFixture<KartagoAcademyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartagoAcademyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartagoAcademyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
