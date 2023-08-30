import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MarketingTeamService } from 'src/app/services/marketing-team.service';
import { PlaceOrderRealTimeService } from 'src/app/services/place-order-r-t.service';
import { DataMarketingTeam } from 'src/app/shared/models/marketing-team.model';
import { PlaceOrderRealTimeModel } from 'src/app/shared/models/place-order-r-t/place-order.model';

@Component({
  selector: 'app-place-order-r-t',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <form class="form">
            <div class="form-group mb-0">
              <div class="row">

                <div class="col-lg-4 col-md-6">
                  <div class="dropdown">
                      <select (change)="onFilterByMarketingTeam($event.target)" class="form-select form-select btn bg-outline-primary dropdown-toggle w-100" aria-label="Default select example">
                        <option value="" selected>-- Marketing Team --</option>
                        <option [value]="team.pK_SyMTe" *ngFor="let team of marketingTeam$ | async">{{team.name}}</option>
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
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">No.</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Member Ref</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">Member type</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">marketign</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">purity</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">buy/sell</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">quanitty</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">limit price</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">limit amount</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">stop price</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">stop amount</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">create date</th>
                  <th class="text-center text-uppercase text-xs font-weight-bolder opacity-7">status</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngIf="orders.length < 1; else showOrders">
                    <td colspan="10" class="text-center py-3 h3 opacity-5">ไม่พบข้อมูล</td>
                </tr>
                <ng-template #showOrders>
                <tr class="text-primary" [class.bg-violet]="odd" *ngFor="let order of orders; let i=index; let odd=odd">
                  <!-- No. -->
                  <td class="text-center">{{i+1}}</td>

                  <!-- Member Ref -->
                  <td class="text-center">{{order.memberRef}}</td>

                  <!-- Member Type -->
                  <td class="text-center">{{order.memberType=='P' ? "บุคคลธรรมดา" : "นิติบุคคล"}}</td>

                  <!-- Marketign -->
                  <td class="text-center">{{order.tradeName}}</td>

                  <!-- Purity -->
                  <td class="text-center" [ngClass]="{ 'text-gold': order.purity === 99, 'text-blue': order.purity === 96 }">
                    {{ order.purity === 99 ? "99.99%" : "96.50%" }}
                  </td>

                  <!-- buy/sell -->
                  <td class="text-center"[ngClass]="{'text-green': order.tradeType === 'Buy','text-red': order.tradeType === 'Sell'}"> 
                    {{order.tradeType}}
                  </td>

                  <!-- quanitty -->
                  <td class="text-center">{{order.quantity|number}}</td>

                  <!-- limit price -->
                  <td class="text-center">{{order.priceLimit|number}}</td>

                  <!-- limit amount -->
                  <td class="text-center">{{order.amountLimit|number}}</td>

                  <!-- stop price -->
                  <td class="text-center">{{order.priceStop|number}}</td>

                  <!-- stop amount -->
                  <td class="text-center">{{order.amountStop|number}}</td>

                  <!-- Create Date -->
                  <td class="text-center">{{ order.created| date : "dd/MM/yy, H:mm" }}</td>

                  <!-- Status -->
                  <td class="text-center">
                    <p class="mb-0 px-2" [StatusColumnStyle]="order.tradeStatus"></p>
                  </td>
                </tr>
                </ng-template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  
  .text-gold {
      color: #E8BB60;
    }

    .text-blue {
      color: #5E72E3;
    }

    .text-black {
      color: #012D52;
    }

    .text-green {
      color: #34D08C;
    }

    .text-red {
      color: #F44251;
    }

    .bg-violet {
      background-color: #e7e9f8;
    }

  `]
})
export class PlaceOrderRTComponent {

  orders: PlaceOrderRealTimeModel[] = [];

  marketingTeam$: Observable<DataMarketingTeam[]>

  constructor(
              private marketingTeamService: MarketingTeamService,
              private placeOrderRealTimeService:PlaceOrderRealTimeService, 
              private ref: ChangeDetectorRef) {

    this.getOrders();

    this.marketingTeam$ = this.marketingTeamService.marketingTeam$;

  }

  onFilterByMarketingTeam(event: any) {
    console.log(event.value)
  }

  private getOrders() {

    const next = (res: PlaceOrderRealTimeModel[]) => this.orders = res;

    this.placeOrderRealTimeService
        .placeOrder$
        .pipe(tap(_=>this.ref.markForCheck()))
        .subscribe({next})
  }
}
