import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, from, throwError } from 'rxjs';


@Injectable()
export class UrlService {

  requestUrl = 'https://tingjiewebsite.000webhostapp.com/sqlQuery/urlManage.php';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUrl(params: FormData): Observable<any> {
    params.append('action', 'get');
    return this.httpClient.post(this.requestUrl, params)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  setUrl(params: FormData): Observable<any> {
    params.append('action', 'set');
    return this.httpClient.post(this.requestUrl, params)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

}
