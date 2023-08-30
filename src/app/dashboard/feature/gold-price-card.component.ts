import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { TraderPriceService } from 'src/app/services/trader-price.service';
import { TraderPriceModel } from 'src/app/shared/models/trader-price/trader-price.model';


@Component({
  selector: 'app-gold-price-card',
  template: `
        <div class="row">
          <div class="col-md-6  col-xxl-3">
            <div class="card">
              <div class="card-body p-3">
                <small class="text-xs px-xxl-0 text-primary">Gold Spot 99.99%</small>
                <div class="row">
                  <div class="col-4 px-lg-0 px-xxl-2 h6 text-primary mb-0">{{ price.bid | currency : "" : "" : "2.0" }}</div>
                  <div class="col-4 px-lg-0 px-xxl-2 h6 text-primary mb-0">{{ price.ask | currency : "" : "" : "2.0" }}</div>
                  <div class="col-4 px-lg-0 px-xxl-2 text-xs text-primary">ดอลลาร์/ออนซ์</div>
                </div>
                
                <small class="text-xs text-primary">ราคาสมาคมค้าทองคำ</small>
                <div class="row">
                  <div class="col-4 px-lg-0 px-xxl-2 h6 text-primary mb-0">{{price.bidAss | number : ".0-2"}}</div>
                  <div class="col-4 px-lg-0 px-xxl-2 h6 text-primary mb-0">{{price.askAss | number : ".0-2"}}</div>
                  <div class="col-4 text-xs text-primary">บาทละ(บาท)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6  col-xxl-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
            <div class="card">
              <div class="card-body p-3">
                <small class="text-xs text-primary">Manage Price LV1 Gold Spot 96.50%</small>
                <div class="row">
                  <div class="col-4  px-lg-0 px-xxl-2  px-0 h6 text-primary mb-0">{{ price.bid96Bg1 | currency : "" : "" : "2.0" }}</div>
                  <div class="col-4  px-lg-0 px-xxl-2  px-0 h6 text-primary mb-0">{{ price.ask96Bg1 | currency : "" : "" : "2.0" }}</div>
                  <div class="col-4  px-lg-0 px-xxl-2  px-0 text-xs text-primary">ดอลลาร์/ออนซ์</div>
                </div>
                
                <small class="text-xxs text-primary text-primary">Manage Price LV1 Gold Spot 99.99%</small>
                <div class="row">
                  <div class="col-4  px-lg-0 px-xxl-2  px-0 h6 text-primary mb-0">{{ price.bid99Bg1 | currency : "" : "" : "2.0" }}</div>
                  <div class="col-4  px-lg-0 px-xxl-2  px-0 h6 text-primary mb-0">{{ price.ask99Bg1 | currency : "" : "" : "2.0" }}</div>
                  <div class="col-4  px-lg-0 px-xxl-2 px-0 text-xs text-primary">บาทละ(บาท)</div>
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
                      <h3 class="mb-0 text-primary">{{ price.thb }}</h3>
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
                      <div class="btn btn-primary btn-sm px-1 mx-1 mb-0">ONLINE</div>
                      <div class="btn btn-primary btn-sm px-1 mx-1 mb-0">ONLINE</div>
                      <div class="btn btn-primary btn-sm px-1 mx-1 mb-0">BACKUP</div>
                    </div>
                    <div class="col-12">
                      <h2 class="text-center h3 mb-0 text-primary">{{ price.spotno|number }}</h2>
                      <div class="text-end"><small class="text-xs">Spot No</small></div>
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

  price!: TraderPriceModel;

  constructor(public traderPriceService: TraderPriceService) {
    this.getPrice();
  }

  getPrice() {
    const next = (res: TraderPriceModel) => this.price = res;
    const error = (err: HttpErrorResponse) => console.log(err);
    this.traderPriceService
        .price$
        // .pipe(tap(i=>console.log(i)))
        .subscribe({next, error})
  }

}
