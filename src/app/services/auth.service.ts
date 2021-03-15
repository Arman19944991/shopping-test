import { Injectable } from '@angular/core';
import { AuthInterface } from '../models/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  loginUser(data: AuthInterface){
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('auth', 'true');
    this.router.navigate(['/shopping']);
  }

  loginoutUser(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }


}
