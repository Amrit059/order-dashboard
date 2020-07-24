import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { LocalStorageService } from './local-storage.service';
import { LOCAL_STORAGE_CONSTANTS } from '../constants/local-storage.constant';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private apiEndPoint: String = 'http://localhost:4000/rest/api/';

  constructor(
    private httpclient: HttpClient,
    // private localStorageService: LocalStorageService
  ) { }

  get(url, params): Observable<any> {
    console.log('inside core get');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      }),
      params: params
    };
    return this.httpclient.get(`${this.apiEndPoint}${url}`, httpOptions);
  }

  post(url, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      })
    };
    return this.httpclient.post(`${this.apiEndPoint}${url}`, data, httpOptions);
  }

  put(url, data, params): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      }),
      params: params
    };
    return this.httpclient.put(`${this.apiEndPoint}${url}`, data, httpOptions);
  }

  delete(url, params): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      }),
      params: params
    };
    return this.httpclient.delete(`${this.apiEndPoint}${url}`, httpOptions);
  }

  /* admin core functions start from here */

  adminpost(url, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      })
    };
    return this.httpclient.post(`${this.apiEndPoint}${url}`, data, httpOptions);
  }

  adminput(url, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      })
    };
    return this.httpclient.post(`${this.apiEndPoint}${url}`, data, httpOptions);
  }
  /* admin core functions end here */


}
