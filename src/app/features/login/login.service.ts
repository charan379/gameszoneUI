import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loggedIn!: boolean;

  constructor(private http: HttpClient) { }



  set loggedIn(v: boolean) {
    this._loggedIn = v;
  }

  get loggedIn(): boolean {
    return this._loggedIn
  }

  authenticate(userName: string, password: string): Observable<any> {
    return this.http.post(`${environment.api}/auth/generate-token`, { userName, password });
  };




}
