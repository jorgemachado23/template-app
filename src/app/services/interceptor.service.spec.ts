import { TestBed, inject } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import {LoaderService} from './loader.service';

describe('InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorService, LoaderService]
    });
  });

  it('should be created', inject([InterceptorService, LoaderService],
    (service: InterceptorService, loaderService: LoaderService) => {
    expect(service).toBeTruthy();
  }));
});
