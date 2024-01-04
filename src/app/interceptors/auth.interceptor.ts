import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from '../features/login/login.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const loginService: LoginService = inject(LoginService);

  const backendUrl: URL = new URL(environment.api);

  const requestUrl: URL = new URL(req.url);

  console.log(req.url);

  if (backendUrl.origin === requestUrl.origin) {

    const token: string = loginService?.auth?.accessToken;

    if (token) {
      return next(req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) }))
    }

  }

  return next(req);
};
