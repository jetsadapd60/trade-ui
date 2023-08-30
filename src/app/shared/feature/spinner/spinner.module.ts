import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, SharedModule],
  providers: [SpinnerService], 
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
