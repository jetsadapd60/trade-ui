import { Component } from '@angular/core';

@Component({
  selector: 'app-hedging',
  template: `
    <div class="row mt-3">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-end">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="form-group">
                  <label for="example-date-input" class="form-control-label">From</label>
                  <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="form-group">
                  <label for="example-date-input" class="form-control-label">To</label>
                  <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="dropdown">
                    <select class="form-select form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                      <option selected>-- ประเภททอง --</option>
                      <option value="1">96.50%</option>
                      <option value="2">99.99%</option>
                    </select>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="dropdown">
                    <select class="form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                      <option selected>-- Supplier --</option>
                      <option value="1">96.50%</option>
                      <option value="2">99.99%</option>
                    </select>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="dropdown">
                    <select class="form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                      <option selected>-- TradeType --</option>
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="dropdown">
                    <select class="form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                      <option selected>-- Trader --</option>
                      <option value="1">All</option>
                    </select>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="dropdown">
                    <select class="form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                      <option selected>-- Status --</option>
                      <option value="1">Sent</option>
                      <option value="1">Unsent</option>
                    </select>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="btn btn-primary btn-md w-100">Search</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
      <div class="card overflow-hidden">
            <div class="table-responsive">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr class="">
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">No.</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Date & Time</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Trade Code</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Trader</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Gold</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Supplier</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">type</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">quantity</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">cus price</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">sup price</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">p/l</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">outs</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-primary">
                      <td class="text-center">1</td>
                      <td class="text-center">96.50%</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center text-danger">0.00</td>
                      <td class="text-center text-danger">0.00</td>
                      <td class="text-center text-danger">0.00</td>
                      <td class="text-center text-danger">0.00</td>
                      <td class="text-center text-danger">0.00</td>
                    </tr>

                    <tr class="text-white bg-primary">
                      <td class="text-center"><strong>Total Kg</strong></td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                      <td class="text-center">3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12">
        <div class="pagination-container d-flex justify-content-end">
          <ul class="pagination pagination-primary m-0">
            <li class="page-item">
              <a class="page-link" href="javascript:;" aria-label="Previous">
                <span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:;">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:;">2</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="javascript:;">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:;">4</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:;">5</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:;" aria-label="Next">
                <span aria-hidden="true"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <div class="card overflow-hidden">
            <div class="table-responsive">
                <table class="table align-items-center mb-0">
                  <tbody>
                    <tr class="text-primary">
                      <td class="text-center"><strong>Total Buy</strong></td>
                      <td class="text-center">Gold 99.99%:0.00 Kg</td>
                      <td class="text-center">Gold 96.50%:0.00 Bg</td>
                      <td class="text-center">Gold 99.99%:0.00 Oz</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                    </tr>
                    <tr class="text-white bg-primary">
                      <td class="text-center text-danger"><strong>Total Sell</strong></td>
                      <td class="text-center">Gold 99.99%:0.00 Kg</td>
                      <td class="text-center">Gold 96.50%:0.00 Bg</td>
                      <td class="text-center">Gold 99.99%:0.00 Oz</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                      <td class="text-center">0.00</td>
                    </tr>
                    <tr class="text-dark">
                      <td class="text-center"><strong>Summary</strong></td>
                      <td class="text-center">Gold 99.99%:0.00 Kg</td>
                      <td class="text-center">Gold 96.50%:0.00 Bg</td>
                      <td class="text-center">Gold 99.99%:0.00 Oz</td>
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

    <div class="row mt-3">
      <div class="col-12">
      <div class="card overflow-hidden">
            <div class="table-responsive">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr class="">
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">summary</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">product</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">price sell</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">vol.</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">usd</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">price buy</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">vol.</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">usd</th>
                      <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">net</th>
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
                      <td class="text-center">99.99 Oz(kg)</td>
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
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12 text-end">
        <div class="btn btn-primary btn-lg">Export to Excel</div>
      </div>
    </div>
  `,
  styles: [`
    .active {

    }
  `]
})
export class HedgingComponent {

}
