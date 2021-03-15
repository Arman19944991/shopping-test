import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(resolve => {
        if (sessionStorage.getItem("auth")) {
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
    });
  }
}