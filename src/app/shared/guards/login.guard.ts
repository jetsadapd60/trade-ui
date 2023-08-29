import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServiec } from 'src/app/services/token.service';
import { StorageKey } from '../enums/token.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private tokenService: TokenServiec, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = this.tokenService.getAccessToken(StorageKey.IS_LOGGEDIN);
      if(isLoggedIn) {
        this.router.navigateByUrl('/dashboard');
        return false;
      }

    return true;
  }
  
}
