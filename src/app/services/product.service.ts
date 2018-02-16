import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {products} from '../../mocks/mock-products';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<any> {
    return of(products);
  }
}
