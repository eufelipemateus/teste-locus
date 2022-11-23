import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class ApiHttpInterceptorInterceptor implements HttpInterceptor {
  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      url: `${environment.api_protocol}://${environment.api_url}/${request.url}`
    })
    return next.handle(newReq)
  }
}
