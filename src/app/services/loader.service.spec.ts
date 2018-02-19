import { TestBed, inject } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService]
    });
  });

  it('should be created', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeTruthy();
  }));

  it('should verify loading value',  inject([LoaderService], (service: LoaderService) => {
      service.setLoading(true);
      service.loading$.subscribe(result => expect(result).toBeTruthy());
  }));
});
