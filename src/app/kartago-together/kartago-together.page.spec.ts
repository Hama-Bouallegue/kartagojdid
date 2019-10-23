import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartagoTogetherPage } from './kartago-together.page';

describe('KartagoTogetherPage', () => {
  let component: KartagoTogetherPage;
  let fixture: ComponentFixture<KartagoTogetherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartagoTogetherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartagoTogetherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
