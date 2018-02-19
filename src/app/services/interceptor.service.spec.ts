import { TestBed, inject } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import {LoaderService} from './loader.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';

describe('InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}, LoaderService]
    });
  });


  it('should verify the intercept method', inject([ HttpClient, HttpTestingController, LoaderService],
(http: HttpClient, mock: HttpTestingController, loaderService: LoaderService) => {
      spyOn(loaderService, 'setLoading');
      http.get('/test').subscribe(response => expect(response).toBeTruthy());
      const request = mock.expectOne('/test');
      request.flush({});
      mock.verify();
      expect(loaderService.setLoading).toHaveBeenCalled();
      expect(loaderService.setLoading).toHaveBeenCalledWith(true);
      loaderService.loading$.subscribe(result => expect(result).toBeTruthy());
  }));
});
