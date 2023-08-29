import { Component } from '@angular/core';

@Component({
  selector: 'app-order-match',
  template: `

      <!-- Flitter -->
      <div class="row">
        <div class="col-12">
          <div class="card mt-3">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-12 col-xl-2">
                  <h3 class="text-primary small">Match Order</h3>
                </div>
                <div class="col-12 col-xl-4">
                  <div class="form-group d-xl-flex gap-2 align-items-center mb-0">
                    <label for="example-date-input" class="form-control-label">From</label>
                    <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                  </div>
                </div>
                <div class="col-12 col-xl-4">
                  <div class="form-group d-xl-flex gap-2 align-items-center mb-0">
                    <label for="example-date-input" class="form-control-label">To</label>
                    <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                  </div>
                </div>
                <div class="col-12 col-xl-2">
                  <button type="button" class="btn btn-xl mt-3 mt-xl-0 btn-primary mb-0 w-100">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="row mt-3">
        <div class="col-xl-8">
          <div class="card overflow-hidden" style="border-radius: 1.8rem;">
            <div class="table-responsive">
              <div class="table-responsive bg-primary w-100">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr class="text-white">
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">no</th>
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">date & time</th>
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">gold type</th>
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">trader</th>
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">customer sell</th>
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">quantity sell</th>
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">customer buy</th>
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">quantity buy</th>
                      <th class="text-center text-uppercase px-1 py-4 text-xs font-weight-bolder opacity-7">p/l</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngIf="true" class="text-center border ">
                      <td colspan="10">
                        <h3 class="text-white py-4">ไม่มีข้อมูล</h3>
                      </td>
                    </tr>

                    <tr *ngIf="false" class="text-white">
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                    </tr>

                    
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="row text-primary bg-white py-2">
              <div class="col-4 col-xl-3 offset-2 offset-xl-5">Total 96.50 Bg</div>
              <div class="col-2 col-xl-1 text-center">0.00</div>
              <div class="col-2 text-center">0.00</div>
              <div class="col-2 col-xl-1 text-center">0.00</div>
            </div>
            <div class="row text-primary bg-white pb-2 ">
              <div class="col-4 col-xl-3 offset-2 offset-xl-5">Total 99.99 Kg</div>
              <div class="col-2 col-xl-1 text-center">0.00</div>
              <div class="col-2 text-center">0.00</div>
              <div class="col-2 col-xl-1 text-center">0.00</div>
            </div>
          </div>
          <div class="mt-3 text-end">
            <div class="btn btn-primary btn-lg">Export to Excell</div>
          </div>
        </div>

        <div class="col-xl-4 mt-3 mt-xl-0">
          <div class="card bg-primary" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0;">
            <div class="card-body">
              <div class="row text-white px-0">
                <div class="col-6 text-weight-bold">Sum Match Order</div>
                <div class="col-6 text-weight-bold text-center">Total Order</div>
              </div>
            </div>
          </div>
          <div class="card bg-white" style="border-top-left-radius: 0;border-top-right-radius: 0;">
            <div class="card-body">
              <div class="row text-primary px-0 pb-2" *ngFor="let i of [1,2,3]">
                <div class="col-6">demotrader2</div>
                <div class="col-6 text-center">0</div>
              </div>
            </div>
          </div>
          <div class="card bg-primary" style="border-top-left-radius: 0;border-top-right-radius: 0;">
            <div class="card-body py-3">
              <div class="row text-white">
                <div class="col-6 "><strong class="text-weight-bold">Total</strong></div>
                <div class="col-6 text-center">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>



  `,
  styles: [``]
})
export class OrderMatchComponent {

}

