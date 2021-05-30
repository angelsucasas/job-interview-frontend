import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders  } from '@angular/common/http';
import { ClientModule } from './http.module'
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: ClientModule
})
export class HttpClientService {

  private headers = new HttpHeaders();
  
  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(url:string){
    return this.httpClient.get(url).pipe(retry(3),catchError(this.handleError));
  }

  public sendPostRequest(url:string,body:{}){
    return this.httpClient.post(url,body).pipe(retry(3),catchError(this.handleError));
  }

}
