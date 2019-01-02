import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// import {User, SmartUser} from '../_models/user';
// import {environment} from '../../../environments/environment';

// THIS APPROACH BREAKS THE hasTokenExpired() METHOD (cannot access the moment from the interceptor)
// import {moment} from 'moment/src/moment';

// The approach of loading the moment import works well for the interceptor.
import * as moment from 'moment';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  url = 'http://pete85.com/api/portfolio.php';
  headers: any;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.headers = request.clone({setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }});

    return this.headers;
  }
}
