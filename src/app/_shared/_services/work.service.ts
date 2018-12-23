import {throwError as observableThrowError, Observable} from 'rxjs/index';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';



@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private url = 'http://pete85.com/api/portfolio.php';

  constructor(private _http: HttpClient) {
  }

  getWorks(): Observable<any> {

    return this._http
      .get(this.url + '/')
      .map((response: HttpResponse<any>) => response)
      .catch(error => {
        // return Observable.of({description: 'Error Value Emitted'});
      });
  }
}
