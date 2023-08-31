import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { HightLowPriceService } from 'src/app/services/hight-low-price.service';
import { HLPriceResponesModel } from 'src/app/shared/models/h-l-price/h-l-price.model';

@Component({
  selector: 'app-high-low-price',
  template: `
    <div class="card mt-3" *ngIf="hlPrice !== undefined">
      <div class="card-body">
        <div class="row">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr class="text-center">
                  <td>LV 1</td>
                  <td>High Bid</td>
                  <td>Low Offer</td>
                  <td>High Offer</td>
                  <td>Low Bid</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>96.50 % Bg</td>
                  <td>{{ hlPrice.high96bid1 | number }}</td>
                  <td>{{ hlPrice.low96ask1 | number }}</td>
                  <td>{{ hlPrice.high96ask1 | number }}</td>
                  <td>{{ hlPrice.low96bid1 | number }}</td>
                </tr>

                <tr class="text-center">
                  <td>(Time)</td>
                  <td>({{ hlPrice.high96bid1Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.low96ask1Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high96ask1Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.low96bid1Date | date : "H:mm" }})</td>
                </tr>

                <tr class="text-center">
                  <td class="text-blue bg-blue-10">99.99 % Kg</td>
                  <td class="text-red bg-blue-10">{{ hlPrice.high99bid1 | number }}</td>
                  <td class="text-blue bg-blue-10">{{ hlPrice.low99ask1 | number }}</td>
                  <td class="text-red bg-grey-10">{{ hlPrice.high99ask1 | number }}</td>
                  <td class="text-blue bg-grey-10">{{ hlPrice.low99bid1 | number }}</td>
                </tr>

                <tr class="text-center">
                  <td>(Time)</td>
                  <td>({{ hlPrice.high99bid1Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid1Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid1Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid1Date | date : "H:mm" }})</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-3" *ngIf="hlPrice !== undefined">
      <div class="card-body">
        <div class="row">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr class="text-center">
                  <td>LV 2</td>
                  <td>High Bid</td>
                  <td>Low Offer</td>
                  <td>High Offer</td>
                  <td>Low Bid</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>96.50 % Bg</td>
                  <td>{{ hlPrice.high96bid2 | number }}</td>
                  <td>{{ hlPrice.low96ask2 | number }}</td>
                  <td>{{ hlPrice.high96ask2 | number }}</td>
                  <td>{{ hlPrice.low96bid2 | number }}</td>
                </tr>

                <tr class="text-center">
                  <td>(Time)</td>
                  <td>({{ hlPrice.high96bid2Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.low96ask2Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high96ask2Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.low96bid2Date | date : "H:mm" }})</td>
                </tr>

                <tr class="text-center">
                  <td>99.99 % Kg</td>
                  <td>{{ hlPrice.high99bid2 | number }}</td>
                  <td>{{ hlPrice.low99ask2 | number }}</td>
                  <td>{{ hlPrice.high99ask2 | number }}</td>
                  <td>{{ hlPrice.low99bid2 | number }}</td>
                </tr>

                <tr class="text-center">
                  <td>(Time)</td>
                  <td>({{ hlPrice.high99bid2Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid2Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid2Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid2Date | date : "H:mm" }})</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-3" *ngIf="hlPrice !== undefined">
      <div class="card-body">
        <div class="row">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <td class="text-center">LV 3</td>
                  <td class="text-center">High Bid</td>
                  <td class="text-center">Low Offer</td>
                  <td class="text-center">High Offer</td>
                  <td class="text-center">Low Bid</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">96.50 % Bg</td>
                  <td class="text-center">{{ hlPrice.high96bid3 | number }}</td>
                  <td class="text-center">{{ hlPrice.low96ask3 | number }}</td>
                  <td class="text-center">{{ hlPrice.high96ask3 | number }}</td>
                  <td class="text-center">{{ hlPrice.low96bid3 | number }}</td>
                </tr>

                <tr>
                  <td class="text-center">(Time)</td>
                  <td class="text-center">({{ hlPrice.high96bid3Date | date : "H:mm" }})</td>
                  <td class="text-center">({{ hlPrice.low96ask3Date | date : "H:mm" }})</td>
                  <td class="text-center">({{ hlPrice.high96ask3Date | date : "H:mm" }})</td>
                  <td class="text-center">({{ hlPrice.low96bid3Date | date : "H:mm" }})</td>
                </tr>

                <tr class="mt-3">
                  <td class="text-center">99.99 % Kg</td>
                  <td class="text-center">{{ hlPrice.high99bid3 | number }}</td>
                  <td class="text-center">{{ hlPrice.low99ask3 | number }}</td>
                  <td class="text-center">{{ hlPrice.high99ask3 | number }}</td>
                  <td class="text-center">{{ hlPrice.low99bid3 | number }}</td>
                </tr>

                <tr>
                  <td class="text-center">(Time)</td>
                  <td class="text-center">({{ hlPrice.high99bid3Date | date : "H:mm" }})</td>
                  <td class="text-center">({{ hlPrice.high99bid3Date | date : "H:mm" }})</td>
                  <td class="text-center">({{ hlPrice.high99bid3Date | date : "H:mm" }})</td>
                  <td class="text-center">({{ hlPrice.high99bid3Date | date : "H:mm" }})</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-3" *ngIf="hlPrice !== undefined">
      <div class="card-body">
        <div class="row">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr class="text-center">
                  <td>LV 4</td>
                  <td>High Bid</td>
                  <td>Low Offer</td>
                  <td>High Offer</td>
                  <td>Low Bid</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>96.50 % Bg</td>
                  <td>{{ hlPrice.high96bid4 | number }}</td>
                  <td>{{ hlPrice.low96ask4 | number }}</td>
                  <td>{{ hlPrice.high96ask4 | number }}</td>
                  <td>{{ hlPrice.low96bid4 | number }}</td>
                </tr>

                <tr class="text-center">
                  <td>(Time)</td>
                  <td>({{ hlPrice.high96bid4Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.low96ask4Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high96ask4Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.low96bid4Date | date : "H:mm" }})</td>
                </tr>

                <tr class="mt-3 text-center">
                  <td>99.99 % Kg</td>
                  <td>{{ hlPrice.high99bid4 | number }}</td>
                  <td>{{ hlPrice.low99ask4 | number }}</td>
                  <td>{{ hlPrice.high99ask4 | number }}</td>
                  <td>{{ hlPrice.low99bid4 | number }}</td>
                </tr>

                <tr class="text-center">
                  <td>(Time)</td>
                  <td>({{ hlPrice.high99bid4Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid4Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid4Date | date : "H:mm" }})</td>
                  <td>({{ hlPrice.high99bid4Date | date : "H:mm" }})</td>
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
export class HighLowPriceComponent {

  hlPrice: HLPriceResponesModel | undefined;

  constructor(private hightLowPriceService: HightLowPriceService) {

    this.getHLPrice()

  }

  private getHLPrice() {

    const next = (res: HLPriceResponesModel|undefined) => res ? this.hlPrice = res:'';

    this.hightLowPriceService
        .hightLowPirce$
        .pipe(tap(i=>console.log(i)))
        .subscribe({next}) 
  }

}
