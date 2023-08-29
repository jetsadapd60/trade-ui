import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login.component";
import { AuthService } from "./auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ThirdPartyModule } from "../shared/third-party.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [SharedModule, AuthRoutingModule, ReactiveFormsModule, FormsModule, ThirdPartyModule],
    providers: [AuthService]
})
export class AuthModule {}