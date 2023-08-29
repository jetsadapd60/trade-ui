import { Component } from '@angular/core';

@Component({
  selector: 'app-summary-outstanding',
  template: `
    <div class="card mt-3">
      <div class="card-body">
        <div class="row align-items-center">
          <!-- <div class="col-12 col-xl-2">
            <h3 class="text-primary small">Summary&Outstanding</h3>
          </div> -->
          <div class="col-12 col-xl-4">
            <div class="form-group">
              <label for="example-date-input" class="form-control-label">From</label>
              <div class="d-flex gap-2">
                <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                <input class="form-control" type="time" value="10:30:00" id="example-time-input">
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-4">
            <div class="form-group">
              <label for="example-date-input" class="form-control-label">To</label>
              <div class="d-flex gap-2">
                <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                <input class="form-control" type="time" value="10:30:00" id="example-time-input">
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-4">
          <label for="example-date-input" class="form-control-label"></label>
            <button type="button" class="btn btn-xl btn-primary w-100">Search</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-primary mt-3 mb-0">Customer</h2>
    <div class="card overflow-hidden">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr class="">
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">summary</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Product</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Sell</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Vol.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Buy</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">VOL.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">NET</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">96.50%</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99%</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center" colspan="2"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="1"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="1"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card mt-3 overflow-hidden">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr class="">
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Outstanding</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Product</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Sell</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Vol.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Buy</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">VOL.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">NET</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">96.50%</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99%</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center" colspan="2"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="1"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="1"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr class="bg-danger border-2 border-top border-primary" />

    <h2 class="text-primary mt-3 mb-0">Hedging</h2>
    <div class="card overflow-hidden">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr class="">
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">summary</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Product</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Sell</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Vol.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">USD</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Buy</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">VOL.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">USD</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Net</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">96.50%</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99%</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99 Oz(Kg)</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center" colspan="2"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="2"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2 class="text-primary mt-3 mb-0">Trading</h2>
    <div class="card overflow-hidden">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr class="">
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">summary</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Product</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Sell</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Vol.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">USD</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Buy</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">VOL.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">USD</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Net</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">96.50 Bg</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99 Kg</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center" colspan="2"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="2"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card mt-3 overflow-hidden">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr class="">
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">summary (IM-EX)</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Product</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Sell</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Vol.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">USD</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Price Buy</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">VOL.</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">USD</th>
              <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Net</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99 Kg</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99 Oz(Kg)</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger">0.00</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center" colspan="2"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="2"></td>
              <td class="text-center">0.00</td>
              <td class="text-center" colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [``]
})
export class SummaryOutstandingComponent {

}
