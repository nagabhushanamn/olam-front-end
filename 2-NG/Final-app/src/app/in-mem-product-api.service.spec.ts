import { TestBed, inject } from '@angular/core/testing';

import { InMemProductAPIService } from './in-mem-product-api.service';

describe('InMemProductAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemProductAPIService]
    });
  });

  it('should be created', inject([InMemProductAPIService], (service: InMemProductAPIService) => {
    expect(service).toBeTruthy();
  }));
});
