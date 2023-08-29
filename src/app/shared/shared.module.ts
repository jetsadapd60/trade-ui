import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThirdPartyModule } from "./third-party.module";

@NgModule({
    imports: [CommonModule, ThirdPartyModule],
    exports: [CommonModule, ThirdPartyModule]
})
export class SharedModule {}