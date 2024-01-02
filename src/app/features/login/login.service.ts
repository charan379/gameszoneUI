import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 private _loggedIn!: boolean;

  constructor() { }



  public set loggedIn(v: boolean) {
    this._loggedIn = v;
  }

  public get loggedIn(): boolean {
    return this._loggedIn
  }




}
