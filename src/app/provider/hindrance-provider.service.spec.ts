import { TestBed } from '@angular/core/testing';

import { HindranceProviderService } from './hindrance-provider.service';

describe('HindranceProviderService', () => {
  let service: HindranceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HindranceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
