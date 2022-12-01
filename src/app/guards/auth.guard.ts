import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }
  
  canActivate() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/home'])
    } else {
      return false
    }
    return false
  }



}
