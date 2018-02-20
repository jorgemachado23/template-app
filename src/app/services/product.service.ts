import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {products} from '../../mocks/mock-products';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return of(products);
  }

  getValue(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users`);
  }
}
