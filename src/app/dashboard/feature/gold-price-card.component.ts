import { Component } from '@angular/core';

@Component({
  selector: 'app-gold-price-card',
  template: `
        <div class="row">
          <div class="col-md-6  col-xxl-3">
            <div class="card">
              <div class="card-body p-3">
                <small class="text-xxs text-primary">Gold Spot 99.99%</small>
                <div class="row">
                  <div class="col-4 px-xxl-0 h6 text-primary mb-0">1,917.83</div>
                  <div class="col-4 px-xxl-0 h6 text-primary mb-0">1,918.71</div>
                  <div class="col-4 px-xxl-0 text-xs text-primary">ดอลลาร์/ออนซ์</div>
                </div>
                
                <small class="text-xxs text-primary">Gold Spot 99.99%</small>
                <div class="row">
                  <div class="col-4 px-xxl-0 h6 text-primary mb-0">1,917.83</div>
                  <div class="col-4 px-xxl-0 h6 text-primary mb-0">1,918.71</div>
                  <div class="col-4 px-xxl-0 text-xs text-primary">บาทละ(บาท)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6  col-xxl-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
            <div class="card">
              <div class="card-body p-3">
                <small class="text-xxs text-primary">Gold Spot 99.99%</small>
                <div class="row">
                  <div class="col-4 px-0 h6 text-primary mb-0">1,917.83</div>
                  <div class="col-4 px-0 h6 text-primary mb-0">1,918.71</div>
                  <div class="col-4 px-0 text-xs text-primary">ดอลลาร์/ออนซ์</div>
                </div>
                
                <small class="text-xxs text-primary text-primary">Gold Spot 99.99%</small>
                <div class="row">
                  <div class="col-4 px-0 h6 text-primary mb-0">1,917.83</div>
                  <div class="col-4 px-0 h6 text-primary mb-0">1,918.71</div>
                  <div class="col-4 px-0 text-xs text-primary">บาทละ(บาท)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6  col-xxl-3 mt-3 mt-md-3 mt-xl-3 mt-xxl-0">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <p class=" text-primary">USD/THB</p>
                  </div>
                  <div class="col-12 text-end">
                    <div class="d-flex justify-content-between align-items-end">
                      <h3 class="mb-0 text-primary">35.008</h3>
                      <p class="p-0 m-0 text-primary">บาท</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6  col-xxl-3 mt-3 mt-md-3 mt-xl-3 mt-xxl-0">
            <div class="card">
              <div class="card-body py-3">
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex justify-content-center">
                      <div class="btn btn-primary px-2 mb-2">ONLINE</div>
                      <div class="btn btn-primary px-2 mb-2">ONLINE</div>
                      <div class="btn btn-primary px-2 mb-2">BACKUP</div>
                    </div>
                    <div class="col-12">
                      <h2 class="text-center mb-0 text-primary">{{122222 | number}} <small class="text-xs">Spot No</small></h2>
                      <div class="text-end"></div>
                    </div>
                  </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
  `,
  styles: [
  ]
})
export class GoldPriceCardComponent {

}
