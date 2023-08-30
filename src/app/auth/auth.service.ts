import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpService } from "../services/http.service";
import { SignInModel } from "../shared/models/auth/sign-in.model";
import { SignInResponeModel } from "../shared/models/auth/sign-in-respones.model";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { Router } from "@angular/router";
import { StorageService } from "../services/storage.service";
import { StorageKey } from "../shared/enums/token.enum";

@Injectable({providedIn: 'root'})
export class AuthService {

    private isLoggedIn = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedIn.asObservable();
    
    private readonly BASE_URL: string = `${environment.url_api_back}BackendAuth/Login`;

    constructor(
                private httpService:HttpService, 
                private storageService: StorageService, 
                private router: Router) {}

    signIn(signinData: SignInModel): Observable<SignInResponeModel> {

        const loggedIn = (res: SignInResponeModel) => res && res.status ? true:false;
        
        return this
                    .httpService
                    .postLogin<SignInResponeModel>(this.BASE_URL, signinData)
                    .pipe(tap(loggedIn))
    }

    signOut() {

        this.storageService.removeStorage(StorageKey.ACCESS_TOKEN);
        this.storageService.removeStorage(StorageKey.IS_LOGGEDIN);

        this.router.navigateByUrl('/login')

        // รีเฟรชเฟจ
        window.location.reload();
    }
}