import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login.component";
import { AuthService } from "./auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [LoginComponent],
    imports: [SharedModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
    providers: [AuthService]
})
export class AuthModule {}