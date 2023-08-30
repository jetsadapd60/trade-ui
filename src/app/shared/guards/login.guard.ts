import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { TokenServiec } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private tokenService: TokenServiec, private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      let isLoggedIn = this.tokenService.getAccessToken();

      if(isLoggedIn) {

        this.router.navigateByUrl('/dashboard');

        return false;

      }

    return true;
  }
  
}
