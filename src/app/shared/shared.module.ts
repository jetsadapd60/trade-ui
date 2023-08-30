import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThirdPartyModule } from "./third-party.module";
import { StatusColumnBgStyleDirective } from "./directives/status-column-Bg-gStyle.directive";

@NgModule({
    imports: [CommonModule, ThirdPartyModule],
    declarations: [],
    exports: [CommonModule, ThirdPartyModule]
})
export class SharedModule {}