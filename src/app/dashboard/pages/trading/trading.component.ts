import { Component } from '@angular/core';

@Component({
  selector: 'app-trading',
  template: `

  <div class="card mt-3">
    <div class="card-body">
      <div class="row">
        <div class="col-12 d-flex gap-5">
          <p class="h2">Order: </p>
          <div class="d-flex gap-5 align-items-center">
            <div class="form-check" style="transform: scale(1.5);" >
              <input (change)="selectedOrder($event.target)"  class="form-check-input" type="radio" value="1" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label m-0" for="flexRadioDefault1">Buy</label>
            </div>
            <div class="form-check align-items-center" style="transform: scale(1.5);" >
              <input (change)="selectedOrder($event.target)" class="form-check-input" value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label m-0" for="flexRadioDefault2">Sell</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class TradingComponent {


  selectedOrder(e: any) {
    console.log(e.value)
  }

}
