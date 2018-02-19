import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LoaderService} from './loader.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.setLoading(true);
    return next.handle(req).map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        const result = event.clone({ body: this.parseServiceModel(event.body)});
        return result;
      }
    }).do((event: HttpEvent<any>) => {
        this.loaderService.setLoading(false);
    });
  }

  parseServiceModel(body: any): void {
    return body.model;
  }
}
