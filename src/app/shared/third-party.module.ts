import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [ToastModule, ButtonModule, ProgressSpinnerModule, DialogModule],
  exports: [ToastModule, ButtonModule, ProgressSpinnerModule, DialogModule],
  providers: [MessageService],
})
export class ThirdPartyModule {}
