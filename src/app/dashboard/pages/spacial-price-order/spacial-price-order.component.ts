import { Component } from '@angular/core';

@Component({
  selector: 'app-spacial-price-order',
  template: `
      <div class="card mt-3">
      <div class="card-body">
        <div class="row align-items-center">
          <!-- <div class="col-12 col-xl-2">
            <h3 class="text-primary small">Summary&Outstanding</h3>
          </div> -->
          <div class="col-12 col-xl-5">
            <div class="form-group">
              <label for="example-date-input" class="form-control-label">From</label>
              <div class="d-flex gap-2">
                <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                <input class="form-control" type="time" value="10:30:00" id="example-time-input">
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-5">
            <div class="form-group">
              <label for="example-date-input" class="form-control-label">To</label>
              <div class="d-flex gap-2">
                <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                <input class="form-control" type="time" value="10:30:00" id="example-time-input">
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-2">
          <label for="example-date-input" class="form-control-label"></label>
            <button type="button" class="btn btn-xl btn-primary w-100">Search</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr class="bg-dark text-white">
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">ref</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Date & Time</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">create by</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">order by</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">gold type</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">price</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">quantity</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">amount</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">cancel</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">status</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngIf="1">
                    <td colspan="10" class="text-center py-3 h3 opacity-5">ไม่พบข้อมูล</td>
                </tr>
                <tr class="text-primary " *ngIf="0">
                  <td class="text-center">1</td>
                  <td class="text-center">96.50%</td>
                  <td class="text-center">0.00</td>
                  <td class="text-center">0.00</td>
                  <td class="text-center">0.00</td>
                  <td class="text-center">0.00</td>
                  <td class="text-center">0.00</td>
                  <td class="text-center">0.00</td>
                  <td class="text-center">0.00</td>
                  <td class="text-center">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SpacialPriceOrderComponent {

}
