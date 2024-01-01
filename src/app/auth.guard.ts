import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  const router: Router = inject(Router);

  const callback = location.href;

  const message = "You are not authorised please login";

  router.navigate(["/login"], { queryParams: { callback, message } });

  return false;
};
