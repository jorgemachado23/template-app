import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoaderService {

  private loading: Subject<boolean> = new Subject<boolean>();
  public loading$ = this.loading.asObservable();

  constructor() { }

  public setLoading(loading): void {
    this.loading.next(loading);
  }
}
