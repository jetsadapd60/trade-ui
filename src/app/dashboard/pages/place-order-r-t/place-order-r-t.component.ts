import { Component } from '@angular/core';

@Component({
  selector: 'app-place-order-r-t',
  template: `

    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <form class="form">
            <div class="form-group mb-0">
              <div class="row">

                <div class="col-lg-4 col-md-6">
                  <div class="dropdown">
                      <select class="form-select form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                        <option selected>-- Marketing Team --</option>
                        <option value="1">retail</option>
                      </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="dropdown">
                      <select class="form-select form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                        <option selected>-- Purity --</option>
                        <option value="1">99.99</option>
                        <option value="1">96.50</option>
                      </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="dropdown">
                      <select class="form-select form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                        <option selected>-- Buy/Sell --</option>
                        <option value="1">Buy</option>
                        <option value="1">Sell</option>
                      </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="dropdown">
                        <select class="form-select form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                          <option selected>-- Status --</option>
                          <option value="1">W</option>
                          <option value="1">M</option>
                          <option value="1">C</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <!-- <div class="form-group"> -->
                      <input type="text" class=" form-control" id="exampleFormControlInput1" placeholder="Search Member Ref">
                    <!-- </div> -->
                </div>
                <div class="col-lg-4 col-md-6 mt-3 mt-md-0">
                  <div class="btn btn-primary w-100">Reset</div>
                </div>
              </div>
            </div>
          </form>
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
  styles: [``]
})
export class PlaceOrderRTComponent {

}
