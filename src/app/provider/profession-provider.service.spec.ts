import { TestBed } from '@angular/core/testing';

import { ProfessionProviderService } from './profession-provider.service';

describe('ProfessionProviderService', () => {
  let service: ProfessionProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
