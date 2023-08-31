import { CSP_NONCE, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { MarketingTeamService } from 'src/app/services/marketing-team.service';
import { PlaceOrderRealTimeService } from 'src/app/services/place-order-r-t.service';
import { DropdownFilterModel } from 'src/app/shared/models/drop-down-fliter.model';
import { DataMarketingTeam, FilterOrderModel } from 'src/app/shared/models/marketing-team.model';
import { PlaceOrderRealTimeModel } from 'src/app/shared/models/place-order-r-t/place-order.model';


@Component({
  selector: 'app-place-order-r-t',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <!-- <form class="form"> -->
            <div class="form-group mb-0">
              <div class="row">

                <div class="col-lg-4 col-xxl-2 col-md-6">
                  <div class="dropdown">
                      <select (change)="onFilterByMarketingTeam($event.target)" class="form-select form-select mb-3 mb-xxl-0 w-100" aria-label="Default select example">
                        <option value="">-- Marketing Team --</option>
                        <option [value]="team.pK_SyMTe" *ngFor="let team of marketingTeam$ | async">{{team.name}}</option>
                      </select>
                  </div>
                </div>
                <div class="col-lg-4 col-xxl-2 col-md-6">
                  <div class="dropdown">
                      <select (change)="onFilterByPurity($event.target)" class="form-select form-select mb-3 mb-xxl-0 w-100" aria-label="Default select example">
                        <option value="">-- Purity --</option>
                        <option [value]="purity.value" *ngFor="let purity of puritys">{{purity.label}}</option>
                      </select>
                  </div>
                </div>
                <div class="col-lg-4 col-xxl-2 col-md-6">
                  <div class="dropdown">
                      <select (change)="onFilterByTradeType($event.target)" class="form-select form-select mb-3 mb-xxl-0 w-100" aria-label="Default select example">
                        <option value="">-- Buy/Sell --</option>
                        <option [value]="type.value" *ngFor="let type of tradeType">{{type.label}}</option>
                      </select>
                  </div>
                </div>
                <div class="col-lg-4 col-xxl-2 col-md-6">
                    <div class="dropdown">
                        <select (change)="onFilterByTradeStatus($event.target)" class="form-select form-select mb-3 mb-xxl-0 w-100" aria-label="Default select example">
                          <!-- <option value="">-- Status --</option> -->
                          <option [value]="status.value" [selected]="status.selected" *ngFor="let status of tradeStatus">{{status.label}}</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-4 col-xxl-2 col-md-6">
                    <!-- <div class="form-group"> -->
                      <input type="text" (keyup)="onFilterByMemberRef($event.target)" class=" form-control" id="exampleFormControlInput1" placeholder="Search Member Ref">
                    <!-- </div> -->
                </div>
                <div class="col-lg-4 col-xxl-2 col-md-6 mt-3 mt-md-0">
                  <div class="btn btn-primary mb-xxl-0 w-100" (click)="onResetFilter()">Reset</div>
                </div>
              </div>
            </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-body px-0">
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

  inputSearch$ = new Subject<string>();

  filterOrderModel: FilterOrderModel = {
    purity: '',
    tradeType: '',
    tradeStatus: '',
    memberRef: '',
    marketingTeam: '',
  }

  constructor(
              private marketingTeamService: MarketingTeamService,
              private placeOrderRealTimeService:PlaceOrderRealTimeService, 
              private ref: ChangeDetectorRef) {

                this.getOrders();

                this.marketingTeam$ = this.marketingTeamService.marketingTeam$;

                
                this.searuchStream();
  }


  private getOrders() {

    const next = (res: PlaceOrderRealTimeModel[]) => this.orders = res;

    this.placeOrderRealTimeService
        .placeOrder$
        .pipe(tap(_=>this.ref.markForCheck()))
        .subscribe({next})
  }

  // สตรีมสำหรับคืนหา member ref
  private searuchStream() {

    const next = (textSearch: string) => {
      if(textSearch === '') return;

      this.filterOrderModel.memberRef = textSearch;
      console.log(this.filterOrderModel)
      this.feedFilter();

    };
    const error = (err: any) => console.log(error);

    this.inputSearch$
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
        )
        .subscribe({next, error})
  }

      /**
   * สำหรับ filter ด้วย Member ref
   * @param e string
   */
  onFilterByMemberRef(e: any) {
    this.filterOrderModel.memberRef = e.value;
    console.log(this.filterOrderModel)
    this.feedFilter();
  }

    /**
   * สำหรับ filter ด้วย Marketign team
   * @param e id, string
   */
  onFilterByMarketingTeam(e: any) {
    this.filterOrderModel.marketingTeam = e.value;
    console.log(this.filterOrderModel)
    this.feedFilter();
  }

  /**
   * สำหรับ filter ด้วย Purity
   * @param e 96.50%, 99.99%
   */
  onFilterByPurity(e: any) {
    this.filterOrderModel.purity = e.value
    console.log(this.filterOrderModel)
    this.feedFilter();
  }
  /**
   * สำหรับ filter ด้วย TradeType
   * @param e Buy, Sell
   */
  onFilterByTradeType(e: any) {
    this.filterOrderModel.tradeType = e.value
    console.log(this.filterOrderModel)
    this.feedFilter();
  }
  /**
   * สำหรับ filter ด้วย TradeType
   * @param e Cancelled, Matched, Waiting
   */
  onFilterByTradeStatus(e: any) {
    this.filterOrderModel.tradeStatus = e.value
    console.log(this.filterOrderModel)
    this.feedFilter();
  }
  onFilterMarketingTeam(e: any) {
    this.filterOrderModel.marketingTeam = e.value;
    this.feedFilter();
    console.log(this.filterOrderModel);
    
  }

  feedFilter() {
    this.placeOrderRealTimeService
        .placeOrder$
        .subscribe(
          res => {
            let item = (res as PlaceOrderRealTimeModel[]);
            if(this.filterOrderModel.purity != ''){
              item = item.filter(v=> v.purity == parseInt(this.filterOrderModel.purity!))
            }
            if(this.filterOrderModel.tradeType != ''){
              item = item.filter(v=> v.tradeType == this.filterOrderModel.tradeType!)
            }
            if(this.filterOrderModel.memberRef != ''){
              item = item.filter(v=> v.memberRef.includes(this.filterOrderModel.memberRef!))
            }
            if(this.filterOrderModel.tradeStatus != ''){
              item = item.filter(v=> v.tradeStatus.includes(this.filterOrderModel.tradeStatus!))
            }
            if(this.filterOrderModel.marketingTeam != ''){
              item = item.filter(v=> v.marketingTeamId == this.filterOrderModel.marketingTeam!.toUpperCase())
            }

            this.orders=item
          }
        )
  }

  onResetFilter() {
    this.filterOrderModel.marketingTeam = '';
    this.filterOrderModel.purity = '';
    this.filterOrderModel.tradeType = '';
    this.filterOrderModel.tradeStatus = '';
    this.filterOrderModel.memberRef = '';
    
    this.feedFilter();
  }



  puritys: DropdownFilterModel[] = [
      { id: '101', label: '96.50 %', value: '96', selected: false },
      { id: '102', label: '99.99 %', value: '99', selected: false },
    ]

  tradeType: DropdownFilterModel[] = [
    { id: '101', label: 'Buy', value: 'Buy', selected: false },
    { id: '102', label: 'Sell', value: 'Sell', selected: false },
  ]

  tradeStatus: DropdownFilterModel[] = [
      { id: '104', label: '-- Status --', value: '', selected: true },
      { id: '101', label: 'Waiting', value: 'Waiting', selected: false },
      { id: '102', label: 'Matched', value: 'Matched', selected: false },
      { id: '103', label: 'Cancelled', value: 'Cancelled', selected: false },
    ]
}
