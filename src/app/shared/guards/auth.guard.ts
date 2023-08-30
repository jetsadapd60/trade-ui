import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { TokenServiec } from "src/app/services/token.service";
import { StorageKey } from "../enums/token.enum";

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor(private router: Router, private tokenService: TokenServiec) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {

    let isLoggedIn = this.tokenService.getAccessToken();

    if(isLoggedIn) {
      return true;
    }
    
    this.router.navigateByUrl('/login')
    return false;
  }
}