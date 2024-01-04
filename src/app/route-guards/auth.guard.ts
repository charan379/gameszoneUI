import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../features/login/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);

  let callback: string;
  let message = "You are not authorised please login";

  const persistedAuth = localStorage.getItem("user");

  if (loginService.loggedIn) {
    return true;
  }


  if (persistedAuth) {
    loginService.auth = JSON.parse(persistedAuth);
    loginService.loggedIn = true;
    return true;
  }

  if (location.pathname === "/login") {
    callback = new URL(`${location.protocol}//${location.host}${state.url}`).toString();
  } else {
    callback = location.href
  }

  router.navigate(["/login"], { queryParams: { callback, message } });

  return false;

};



