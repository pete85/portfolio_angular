import {BehaviorSubject, Observable, throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse, HttpResponse} from '@angular/common/http';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
import {map, filter, switchMap, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private url = 'http://pete85.com/api/portfolio.php';

  constructor(private _http: HttpClient) {
  }


  getItems(table, id): Observable<any> {
    return this._http
      .get(this.url + '/' + table + '/' + id)
      .pipe(map((response: any) => response.json()));
  }

  // getItems(table, id): Observable<any> {
  //   return this._http
  //     .get(this.url + '/' + table + '/' + id)
  //     .map((response: HttpResponse<any>) => response['data'])
  //     .catch(this.handleError);
  // }


  getWorks(table, id): Observable<any> {

    return this._http
      .get(this.url + '/' + table + '/' + id)
      .pipe(
        catchError((error): any => {
          return error;
        }));
    // .map((response: HttpResponse<any>) => response)
    // .catch(this.handleError);

  }


  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return observableThrowError(error);
  }
}
