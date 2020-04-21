import { TestBed } from '@angular/core/testing';

import { EdgeProviderService } from './edge-provider.service';

describe('EdgeProviderService', () => {
  let service: EdgeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
