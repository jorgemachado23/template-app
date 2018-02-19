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

  it('should transpose the data received from the service', inject([HttpClient, HttpTestingController],
(http: HttpClient, mock: HttpTestingController) => {
      http.get('/test').subscribe(response => {
        console.log(response);
        expect(response).toBeTruthy();
        expect(response).toEqual({test: 1});
      });
      const request = mock.expectOne('/test');
      request.flush({success: true, model: { test: 1 }});
      mock.verify();
  }));

  it('should hide the loader in error', inject([HttpClient, HttpTestingController, LoaderService],
(http: HttpClient, mock: HttpTestingController, loaderService: LoaderService) => {
      spyOn(loaderService, 'setLoading');
      http.get('/test').subscribe(response => console.log('error'), error => console.log(error));
      const request = mock.expectOne('/test').error(new ErrorEvent('network error'));
      mock.verify();
      expect(loaderService.setLoading).toHaveBeenCalledTimes(3);
  }));
});
