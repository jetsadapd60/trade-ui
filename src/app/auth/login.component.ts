import { Component, OnDestroy } from "@angular/core";
import { AuthService } from "./auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { SignInResponeModel } from "../shared/models/auth/sign-in-respones.model";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { TokenServiec } from "../services/token.service";
import { StorageKey } from "../shared/enums/token.enum";
import { StorageService } from "../services/storage.service";

@Component({
    selector: 'login',
    template: `
        <section>
            <div class="page-header min-vh-100">
                <div class="container">
                    <div class="row bg-info py-5 rounded-3">
                        <div class="col-12">
                            <img src="assets/img/1X.png" class="d-block mx-auto" alt="">
                        </div>
                    </div>
                    <div style="height: 50px;"></div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-5 col-md-7 d-flex flex-column mx-auto">
                            <div class="card card-plain border overflow-hidden">
                                <div class="card-header pb-0 text-start border">
                                    <h4 class="font-weight-bolder">Sign In (Market Maker)</h4>
                                    <p class="mb-0">Enter your email and password to sign in</p>
                                </div>
                                <div class="card-body border bg-white">
                                    <form [formGroup]="form" (ngSubmit)="signIn()">
                                        <div class="mb-3">
                                        <input formControlName="userName" type="text" class="form-control form-control-lg" placeholder="Email" aria-label="Email">
                                        </div>
                                        <div class="mb-3">
                                        <input formControlName="password" type="text" class="form-control form-control-lg" placeholder="Password" aria-label="Password">
                                        </div>
                                        <div class="text-center">
                                        <button type="submit" [disabled]="isFormValid" class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="text-center border">
                                    <span>© Copyright Elegance. All Rights Reserved <br> Designed by Elegance team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>


        
        <p-toast></p-toast>
    `,
    styles: [`
        .spinner-backgroud {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 99;
            transform: translate(-50%, -50%);
        }

        .bg-info {
            background: #E7E9F8 !important;
        }

        .card-header {
            background: none !important;
        }
    `]
})
export class LoginComponent implements OnDestroy {
    form: FormGroup;
    private subscription!: Subscription;
    isHiddenSpinner = true;

    
    constructor(
            private fb: FormBuilder, 
            private authService: AuthService, 
            private messageService: MessageService,
            private router: Router,
            private tokenService: TokenServiec,
            private storageService: StorageService) {

        this.form = this.fb.group({
            userName: ['demotrader', [Validators.required]],
            password: ['demotrader', [Validators.required]]
        });

    }

    get isFormValid() {
        return this.form.invalid;
    }

    signIn() {
        if(!this.isFormValid) {
            this.isHiddenSpinner = false;
            const signin = this.authService.signIn({...this.form.value});

            const next = (res: SignInResponeModel) => {
                if(res && !res.status) {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
                    return;
                }

                const { data: {token, refreshToken, userID} } = res;
                this.messageService.add({ severity: 'success', summary: 'Success', detail: `${res.message}` });
                
                this.tokenService.setAccessToken(token);
                this.tokenService.setRreshToken(refreshToken);
                
                this.storageService.setStorage(StorageKey.IS_LOGGEDIN, 'true');
                this.storageService.setStorage(StorageKey.USER_ID, userID);

                this.router.navigateByUrl('/dashboard');
            }

            const error = (err: any) => {}
            const complete = () => this.isHiddenSpinner = true;

            this.subscription = signin.subscribe({next, error, complete });
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}