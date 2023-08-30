import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
            <div class="spinner-backgroud d-flex justify-content-center" [style]="style">
                <p-progressSpinner></p-progressSpinner>
            </div>
  `,
  styles: [
    `
    .spinner-backgroud {
            position: absolute;
            left: 50%;
            /* top: 50%; */
            z-index: 99;
            transform: translate(-50%, -50%);
        }
    `
  ]
})
export class SpinnerComponent {

  @Input('top') top: number = 200;
  @Input('left') left: number = 100;

  get style() {
    return {
      "top":`${this.top}%`
    }
  }

}
