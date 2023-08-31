import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { SummaryOutsService } from 'src/app/services/summary-outs.service';
import { SummaryHeding } from 'src/app/shared/models/sum-out/summary-heding.model';
import { SummaryTrading } from 'src/app/shared/models/sum-out/summary-trading.model';
import { SummarySettle } from 'src/app/shared/models/sum-out/summarySettle.model';

@Component({
  selector: 'app-summary-outstanding',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
                <input class="form-control" type="date" (change)="onSelectFromDate($event.target)" [value]="nowDate" id="example-date-input">
                <input class="form-control" type="time" [value]="nowTime" id="example-time-input">
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-4">
            <div class="form-group">
              <label for="example-date-input" class="form-control-label">To</label>
              <div class="d-flex gap-2">
                <input class="form-control" type="date" [value]="nowDate" id="example-date-input">
                <input class="form-control" type="time" [value]="nowTime" id="example-time-input">
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-4">
          <label for="example-date-input" class="form-control-label"></label>
            <button type="button" class="btn btn-xl btn-primary w-100" (click)="onSearch()">Search</button>
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
              <td class="text-center">{{ sumSettle?.sellBg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.sellBgQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.buyBg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.buyBgQty | number : "1.2-2" }}</td>
              <td class="text-center" [ngClass]="{'text-red':(sumSettle?.buyBgQty ?? 0) - (sumSettle?.sellBgQty ?? 0) <= 0}">{{(sumSettle?.buyBgQty ?? 0) - (sumSettle?.sellBgQty ?? 0)| number : "1.2-2"}}</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99%</td>
              <td class="text-center">{{ sumSettle?.sellKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.sellKgQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.buyKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.buyKgQty | number : "1.2-2" }}</td>
              <td class="text-center text-danger" [ngClass]="{'text-red':(sumSettle?.buyKgQty ?? 0) - (sumSettle?.sellKgQty ?? 0) <= 0}"> {{(sumSettle?.buyKgQty ?? 0) - (sumSettle?.sellKgQty ?? 0)| number : "1.2-2"}}</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumSettle?.totalSellKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.totalSellQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.totalBuyKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumSettle?.totalBuyQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
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
              <td class="text-center">{{ outSettle?.sellBg | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.sellBgQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.buyBg | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.buyBgQty | number : "1.2-2" }}</td>
              <td class="text-center text-danger" [ngClass]="{'text-red':(outSettle?.buyBgQty ?? 0) - (outSettle?.sellBgQty ?? 0) <= 0}">{{(outSettle?.buyBgQty ?? 0) - (outSettle?.sellBgQty ?? 0)| number : "1.2-2"}}</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99%</td>
              <td class="text-center">{{ outSettle?.sellKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.sellKgQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.buyKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.buyKgQty | number : "1.2-2" }}</td>
              <td class="text-center text-danger" [ngClass]="{'text-red':(outSettle?.buyKgQty ?? 0) - (outSettle?.sellKgQty ?? 0) <= 0}">{{(outSettle?.buyKgQty ?? 0) - (outSettle?.sellKgQty ?? 0)| number : "1.2-2"}}</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center"></td>
              <td class="text-center">{{ outSettle?.totalSellKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.totalSellQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.totalBuyKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ outSettle?.totalBuyQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
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
              <td class="text-center">{{ sumHedge?.summary?.sellBg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.sellBgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumHedge?.summary?.buyBg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.buyBgQty | number : "1.2-2" }}</td>
              <td class="text-center">0.00</td>
              <td class="text-center text-danger" [ngClass]="{'text-red': (sumHedge?.summary?.buyBgQty ?? 0) - (sumHedge?.summary?.sellBgQty ?? 0) <=0}">{{(sumHedge?.summary?.buyBgQty ?? 0) -(sumHedge?.summary?.sellBgQty ?? 0) | number : "1.2-2"}}</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99%</td>
              <td class="text-center">{{ sumHedge?.summary?.sellKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.sellKgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumHedge?.summary?.buyKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.buyKgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center text-danger" [ngClass]="{'text-red':(sumHedge?.summary?.buyKgQty ?? 0) - (sumHedge?.summary?.sellKgQty ?? 0) <=0}">{{(sumHedge?.summary?.buyKgQty ?? 0) - (sumHedge?.summary?.sellKgQty ?? 0) | number : "1.2-2"}}</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99 Oz(Kg)</td>
              <td class="text-center">{{ sumHedge?.summary?.sellOz | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.sellOzQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.sellUsd | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.buyOz | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.buyOzQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.buyUsd | number : "1.2-2" }}</td>
              <td class="text-center text-danger" [ngClass]="{'text-red':(sumHedge?.summary?.buyOzQty ?? 0) - (sumHedge?.summary?.sellOzQty ?? 0) <=0}">{{(sumHedge?.summary?.buyOzQty ?? 0) - (sumHedge?.summary?.sellOzQty ?? 0) | number : "1.2-2"}}</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumHedge?.summary?.totalSellKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.totalSellQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumHedge?.summary?.totalBuyKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumHedge?.summary?.totalBuyQty | number : "1.2-2" }}</td>
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
              <td class="text-center">{{ sumTrade?.summary?.sellBg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.sellBgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumTrade?.summary?.buyBg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.buyBgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center text-danger" [ngClass]="{'text-red':(sumTrade?.summary?.buyBgQty ?? 0) - (sumTrade?.summary?.sellBgQty ?? 0) <=0}">{{(sumTrade?.summary?.buyBgQty ?? 0) - (sumTrade?.summary?.sellBgQty ?? 0) | number : "1.2-2"}}</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99 Kg</td>
              <td class="text-center">{{ sumTrade?.summary?.sellKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.sellKgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumTrade?.summary?.buyKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.buyKgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center text-danger" [ngClass]="{'text-red':(sumTrade?.summary?.buyKgQty ?? 0) - (sumTrade?.summary?.sellKgQty ?? 0) <=0}">{{(sumTrade?.summary?.buyKgQty ?? 0) - (sumTrade?.summary?.sellKgQty ?? 0) | number : "1.2-2"}}</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumTrade?.summary?.totalSellKg ?? 0 | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.totalSellQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumTrade?.summary?.totalBuyKg ?? 0 | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.totalBuyQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center"  [ngClass]="{'text-red':(sumTrade?.summary?.buyKgQty ?? 0) - (sumTrade?.summary?.sellKgQty ?? 0) <=0}">{{(sumTrade?.summary?.buyKgQty ?? 0) - (sumTrade?.summary?.sellKgQty ?? 0) | number : "1.2-2"}}</td>
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
              <td class="text-center">{{ sumTrade?.summary?.sellKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.sellKgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumTrade?.summary?.buyKg | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.buyKgQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center text-danger" [ngClass]="{'text-red':(sumTrade?.summary?.buyKgQty ?? 0) - (sumTrade?.summary?.sellKgQty ?? 0) <=0}">{{(sumTrade?.summary?.buyKgQty ?? 0) - (sumTrade?.summary?.sellKgQty ?? 0) | number : "1.2-2"}}</td>
            </tr>

            <tr class="text-primary">
              <td class="text-center"></td>
              <td class="text-center">99.99 Oz(Kg)</td>
              <td class="text-center">{{ sumTrade?.summary?.sellOz | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.sellOzQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.sellUsd | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.buyOz | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.buyOzQty | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.buyUsd | number : "1.2-2" }}</td>
              <td class="text-center" [ngClass]="{'text-red':(sumTrade?.summary?.buyOzQty ?? 0) - (sumTrade?.summary?.sellOzQty ?? 0) <=0}">{{(sumTrade?.summary?.buyOzQty ?? 0) - (sumTrade?.summary?.sellOzQty ?? 0) | number : "1.2-2"}}</td>
            </tr>

            <tr class="text-white bg-primary">
              <td class="text-center"><strong>Total Kg</strong></td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumTrade?.summary?.totalSellIMEXKg ?? 0 | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.totalSellIMEXQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center">{{ sumTrade?.summary?.totalBuyIMEXKg ?? 0 | number : "1.2-2" }}</td>
              <td class="text-center">{{ sumTrade?.summary?.totalBuyIMEXQty | number : "1.2-2" }}</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
  

        .text-blue {
          color: #5e72e3;
        }

        .text-black {
          color: #012d52;
        }

        .text-green {
          color: #34d08c;
        }
        .text-red {
          color: #f44251;
        }

        .bg-green {
          background-color: #e7f8eb;
        }
        .bg-green-dark {
          background-color: #a2feb7;
        }

        .bg-red {
          background-color: #f8e7f0;
        }
        .bg-red-dark {
          background-color: #ff90a3;
        }

        .bg-blue {
          background-color: #99a3dc;
          color: white;
        }
        .bg-grey {
          background-color: #e7e9f8;
        }

  
  `]
})
export class SummaryOutstandingComponent {


  isLoad: boolean = false;

  fromDate: string | undefined;
  toDate: string | undefined;
  fromTime: string | undefined;
  toTime: string | undefined;

  // settles: SettleModel[] = [];

  sumSettle: SummarySettle | undefined;
  outSettle: SummarySettle | undefined;
  sumHedge: SummaryHeding | undefined;
  sumTrade: SummaryTrading | undefined;

  //  --------------------------- start settle ---------------------------
  priceBuy99sum: number = 0;
  priceBuy96sum: number = 0;
  priceSell99sum: number = 0;
  priceSell96sum: number = 0;

  volBuy99sum: number = 0;
  volBuy96sum: number = 0;
  volSell99sum: number = 0;
  volSell96sum: number = 0;

  net99sum: number = 0;
  net96sum: number = 0;

  avgPB99sum: number = 0;
  avgPB96sum: number = 0;
  avgPS99sum: number = 0;
  avgPS96sum: number = 0;

  avgPB99outs: number = 0;
  avgPB96outs: number = 0;
  avgPS99outs: number = 0;
  avgPS96outs: number = 0;

  totalKgSumPriceBuy: number = 0;
  totalKgSumPriceSell: number = 0;
  totalKgSumVolBuy: number = 0;
  totalKgSumVolSell: number = 0;

  totalKgOutsPriceBuy: number = 0;
  totalKgOutsPriceSell: number = 0;
  totalKgOutsVolBuy: number = 0;
  totalKgOutsVolSell: number = 0;

  priceBuy99outs: number = 0;
  priceBuy96outs: number = 0;
  priceSell99outs: number = 0;
  priceSell96outs: number = 0;

  volBuy99outs: number = 0;
  volBuy96outs: number = 0;
  volSell99outs: number = 0;
  volSell96outs: number = 0;

  net99outs: number = 0;
  net96outs: number = 0;

  //  --------------------------- end settle ---------------------------

  //  --------------------------- start hedging ---------------------------
  totalBuyKg: number = 0;
  totalBuyBg: number = 0;
  totalBuyOz: number = 0;
  totalSellKg: number = 0;
  totalSellBg: number = 0;
  totalSellOz: number = 0;
  summaryKg: number = 0;
  summaryBg: number = 0;
  summaryOz: number = 0;

  totalBuyPl: number = 0;
  totalBuyOuts: number = 0;

  totalSellPl: number = 0;
  totalSellOuts: number = 0;

  totalBuyPriceVolume: number = 0;
  totalSellPriceVolume: number = 0;

  summaryPriceVolume: number = 0;
  summaryPl: number = 0;
  summaryOuts: number = 0;

  avgBuy99: number = 0;
  avgBuy96: number = 0;
  avgBuyOz: number = 0;

  avgSell99: number = 0;
  avgSell96: number = 0;
  avgSellOz: number = 0;

  ozBuyUsd: number = 0;
  ozSellUsd: number = 0;

  totalKgPriceBuy: number = 0;
  totalKgVolBuy: number = 0;

  totalKgPriceSell: number = 0;
  totalKgVolSell: number = 0;

  totalTraderQtyBuyBg: number = 0;
  totalTraderQtyBuyKg: number = 0;
  totalTraderQtyBuyOg: number = 0;
  totalTraderQtySellBg: number = 0;
  totalTraderQtySellKg: number = 0;
  totalTraderQtySellOg: number = 0;

  //  --------------------------- end hedging ---------------------------

  //  --------------------------- start Trading ---------------------------

  totalBuyKgTrade: number = 0;
  totalBuyBgTrade: number = 0;
  totalBuyOzTrade: number = 0;
  totalSellKgTrade: number = 0;
  totalSellBgTrade: number = 0;
  totalSellOzTrade: number = 0;
  summaryKgTrade: number = 0;
  summaryBgTrade: number = 0;
  summaryOzTrade: number = 0;

  totalBuyPriceVolumeTrade: number = 0;
  totalSellPriceVolumeTrade: number = 0;

  summaryPriceVolumeTrade: number = 0;
  summaryPlTrade: number = 0;
  summaryOutsTrade: number = 0;

  ozBuyUsdTrade: number = 0;
  ozSellUsdTrade: number = 0;

  avgBuy99Trade: number = 0;
  avgBuy96Trade: number = 0;
  avgBuyOzTrade: number = 0;

  avgSell99Trade: number = 0;
  avgSell96Trade: number = 0;
  avgSellOzTrade: number = 0;

  totalKgPriceBuyTrade: number = 0;
  totalKgVolBuyTrade: number = 0;

  totalKgPriceSellTrade: number = 0;
  totalKgVolSellTrade: number = 0;
  //  --------------------------- end Trading ---------------------------

  constructor(private summaryOutsService: SummaryOutsService, private ref: ChangeDetectorRef) {}


  ngOnInit(): void {
    this.onSearch();
  }

  onSelectFromDate(e: any) {
    this.fromDate = e.value;
  }

  showError(data: string) {
    // this.messageService.add({
    //   severity: 'error',
    //   summary: 'Error',
    //   detail: data,
    // });
  }

  get nowDate() {
    let d = new Date();
    let m = d.getMonth();
    let D = d.getDate();
    let y = d.getFullYear();
    let date = `${y}-${m<10?`0${m+1}`:`${m}`}-${D}`;
    this.fromDate = date;
    this.toDate = date;
    return date;
  }


  get nowTime() {
    let d = new Date();
    let m = d.getMinutes();
    let s = d.getSeconds()
    let h = d.getHours();
    // 10:30:00
    let time = `${h}:${m<10?`0${m}`:`${m}`}`;
    this.fromTime = time;
    this.toTime = time;
    // console.log(d.getSeconds())
    return time;
  }

  onSearch() {
    this.isLoad = true;
    console.log(this.fromDate);
    // console.log(this.toDate);
    // console.log(this.fromTime);
    // console.log(this.toTime);
    // console.log('----------------------------');
    this.getSettle();
    this.getHedge();
    this.getTrade();

    // const timer = setTimeout(() => {
    //   this.isLoad = false;

    //   clearTimeout(timer);
    // }, 300);
  }

  getSettle() {
    this.summaryOutsService
      .getSettle(this.fromDate, this.toDate, this.fromTime, this.toTime)
      .pipe(
        catchError((e) => {
          this.showError("ไม่สามารถเชื่อมต่อข้อมูลข้อมูล settle ได้");
          return e;
        })
      )
      .subscribe((res: any) => {
        this.sumSettle = res['summarySettle'];
        this.outSettle = res['outsSettle'];

        this.ref.markForCheck();
      });
  }

  getHedge() {
    console.log(this.fromDate, this.toDate, this.fromTime, this.toTime)
    this.summaryOutsService
      .getHedge(this.fromDate, this.toDate, this.fromTime, this.toTime)
      .pipe(
        catchError((e) => {
          this.showError("ไม่สามารถเชื่อมต่อข้อมูลข้อมูล Hedges ได้");
          console.log(e);
          return e;
        })
      )
      .subscribe((res: any) => {
        this.sumHedge = res['data'];
        this.ref.markForCheck();
      });
  }

  getTrade() {
    console.log(this.fromDate, this.toDate, this.fromTime, this.toTime)
    // return
    this.summaryOutsService
        .getTrade(this.fromDate, this.toDate, this.fromTime, this.toTime)
        .pipe(
          catchError((e) => {
            this.showError("ไม่สามารถเชื่อมต่อข้อมูลข้อมูล Trades ได้");
            console.log(e);
            return e;
          })
        )
        .subscribe((res: any) => {
          this.sumTrade = res['data'];
          this.ref.markForCheck();
        });
  }

  bgToKg(bg: number): number {
    const kg = ((bg * 15.244) / 1000) * 0.965;
    // console.log(`bgToKg = ${kg}`);
    return kg;
  }
  ozToKg(oz: number): number {
    const kg = oz / 32.148;
    // console.log(`ozToKg = ${kg}`);
    return kg;
  }

}
