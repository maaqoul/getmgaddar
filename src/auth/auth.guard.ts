import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

export const AuthGuard = () => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);
  return authService.getAuthState().pipe(
    map((state) => {
      if (!state) {
        router.navigate(['/auth/login']);
        return false;
      }
      return true;
    })
  );
};
