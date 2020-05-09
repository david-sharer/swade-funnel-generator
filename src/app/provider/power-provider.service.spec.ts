import { TestBed } from '@angular/core/testing';

import { PowerProviderService } from './power-provider.service';

describe('PowerProviderService', () => {
  let service: PowerProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
