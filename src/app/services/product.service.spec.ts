import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should return products', inject([ProductService], (service: ProductService) => {
    let listProducts: any[] = [];
    expect(service.getProducts()).not.toBeNull();
    service.getProducts().subscribe(result => listProducts = result);
    expect(listProducts).not.toBe([]);
    expect(listProducts.length).toBe(77);
  }));
});
