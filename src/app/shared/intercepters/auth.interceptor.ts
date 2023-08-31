import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, every, finalize, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    let ok: string;

    const _next = (event: HttpEvent<any>) => {
      return ok = event instanceof HttpResponse ? 'succeeded' : ''
    };

    const error = (error: any) => (ok = 'failed')

    return next.handle(request).pipe(
      tap({next: _next, error}),
      // Log when response observable either completes or errors
      finalize(() => {        
        const elapsed = Date.now() - started;
        const msg = `${request.method} "${request.urlWithParams}"
           ${ok} in ${elapsed} ms.`;
        console.log(msg)
      })
    );
  }
}
