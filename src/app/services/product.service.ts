import { Injectable } from '@angular/core';
import {products} from '../../mocks/mock-products';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs/index';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return of(products);
  }

  getValue(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/value`);
  }
}
