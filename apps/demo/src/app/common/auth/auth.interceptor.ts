import type { HttpInterceptorFn } from '@angular/common/http';

export function authInterceptor(): HttpInterceptorFn {
  return (req, next) => {
    const isServer = false;
    const token = isServer ? null : localStorage.getItem('auth-token');

    if (token) {
      req = req.clone({ setHeaders: { Authorization: `Token ${token}` } });
    }

    return next(req);
  };
}
