import { TestBed } from '@angular/core/testing';

import { InscriptionService } from './inscription.service';

describe('IscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscriptionService = TestBed.get(InscriptionService);
    expect(service).toBeTruthy();
  });
});
