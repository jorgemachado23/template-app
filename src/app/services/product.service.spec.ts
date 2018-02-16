import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

describe('ProductService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService, HttpTestingController],
    (service: ProductService, http: HttpClient) => {
    expect(service).toBeTruthy();
  }));

  it('should return products', inject([ProductService, HttpTestingController],
(service: ProductService, http: HttpClient) => {
      let listProducts: any[] = [];
      expect(service.getProducts()).not.toBeNull();
      service.getProducts().subscribe(result => listProducts = result);
      expect(listProducts).not.toBe([]);
      expect(listProducts.length).toBe(77);
  }));

  it('should called value get and return an string', inject([ProductService, HttpTestingController],
(service: ProductService, http: HttpTestingController) => {
      let result = '';
      service.getValue().subscribe(response => result = response);
      const mock =  http.expectOne(`${environment.baseUrl}/api/value`);
      mock.flush('blah');
      http.verify();
      expect(service.getValue()).not.toBeNull();
      expect(result).toEqual('blah');
  }));
});
