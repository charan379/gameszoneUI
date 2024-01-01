import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  const router: Router = inject(Router);

  let callback: string;

  if (location.pathname === "/login") {
    const newCallback = new URL(location.href);
    newCallback.searchParams.delete("callback");
    newCallback.searchParams.delete("message");
    newCallback.pathname = state.url;

    console.log(state.url);
    // pending task : query params not getting recognized here
    callback = newCallback.toString();

  } else {
    callback = location.href
  }


  console.log(new URL(callback))
  const message = "You are not authorised please login";

  router.navigate(["/login"], { queryParams: { callback, message } });

  return false;
};
