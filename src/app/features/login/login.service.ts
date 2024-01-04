import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loggedIn!: boolean;

  private _auth!: Authentication;

  statusUpdate: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }



  set loggedIn(v: boolean) {
    this._loggedIn = v;
    this.statusUpdate.emit(this.loggedIn);
  }

  get loggedIn(): boolean {
    return this._loggedIn
  }

  set auth(v: Authentication) {
    localStorage.setItem("user", JSON.stringify(v));
    this._auth = v;
  }

  get auth(): Authentication {
    return this._auth;
  }

  authenticate(userName: string, password: string): Observable<Authentication> {
    console.log("bc ", environment.api);
    return this.http.post<Authentication>(`${environment.api}/auth/generate-token`, { userName, password });
  };

  logout() {
    localStorage.removeItem("user");
    this.loggedIn = false;
  }



}
