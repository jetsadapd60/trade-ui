import { Component, OnInit } from '@angular/core';
import { PlaceOrderRealTimeService } from 'src/app/services/place-order-r-t.service';
import { PlaceOrderModel } from 'src/app/shared/models/place-order-r-t/place-order-respones.model';

@Component({
  selector: 'app-place-order',
  template: `

    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col-6">Place Order</div>
          <div class="col-6 text-end"><div class="btn btn-primary btn-lg h6 mb-0" (click)="getPlaceOrders()">Refresh</div></div>
        </div>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-6 col-12">
            <div class="text-center text-warning fw-bolder h3">Gold 96.50%</div>
            <div class="row">
              <div class="col-6">
                <div class="text-center bg-primary text-white rounded-3 py-2">รับซื้อ</div>
                <div class="row" *ngFor="let item of placeOrders96Buy; let i = index">
                  <div class="col-6 text-center pt-3">{{ item.quantity + " *" }}</div>
                  <div class="col-6 text-center pt-3">{{ item.price | number }}</div>
                </div>
              </div>
              <div class="col-6">
              <div class="text-center bg-dark text-white rounded-3 py-2">ขายออก</div>
                <div class="row" *ngFor="let item of placeOrders96Sell; let i = index">
                  <div class="col-6 text-center pt-3">{{ item.quantity + " *" }}</div>
                  <div class="col-6 text-center pt-3">{{ item.price | number }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-12 mt-3 mt-xl-0">
            <div class="text-center text-primary fw-bolder h3">Gold 99.99%</div>
            <div class="row">
              <div class="col-6">
                <div class="text-center bg-primary text-white rounded-3 py-2">รับซื้อ</div>
                <div class="row" *ngFor="let item of placeOrders99Buy; let i = index">
                  <div class="col-6 text-center pt-3">{{ item.quantity + " *" }}</div>
                  <div class="col-6 text-center pt-3">{{ item.price | number }}</div>
                </div>
              </div>
              <div class="col-6">
              <div class="text-center bg-dark text-white rounded-3 py-2">ขายออก</div>
                <div class="row" *ngFor="let item of placeOrders99Sell; let i = index">
                  <div class="col-6 text-center pt-3">{{ item.quantity + " *" }}</div>
                  <div class="col-6 text-center pt-3">{{ item.price | number }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class PlaceOrderComponent implements OnInit {

  placeOrders: PlaceOrderModel[] = [];
  isLoad: boolean = false;

  placeOrders99Buy: PlaceOrderModel[] = [];
  placeOrders99Sell: PlaceOrderModel[] = [];

  placeOrders96Buy: PlaceOrderModel[] = [];
  placeOrders96Sell: PlaceOrderModel[] = [];

  constructor(private placeOrderRealTimeService: PlaceOrderRealTimeService) {}

  ngOnInit(): void {
    this.getPlaceOrders();
  }

  getPlaceOrders() {
    this.isLoad = true;

    try {
      this.placeOrderRealTimeService
          .placeOrder$
          .subscribe((res) => {
        console.log(res);
        
        // if (res['status'] === 'failure' && res['message'] !== 'jwt malformed') {
        //   this.dialogAwesomeConfirme(DialogLayoutDisplay.DANGER, {
        //     title: 'เกิดข้อผิดพลาดทางระบบ',
        //     description: ('กรุณาแจ้งผู้ดูแลระบบ ' + res['message']) as string,
        //   });
        //   return;
        // }
        // if (res['status'] === 'failure' && res['message'] === 'jwt malformed') {
        //   this.router.navigate(['login']);
        // }
        this.placeOrders = res as PlaceOrderModel[];
        this.filter();

      });
    } catch (error) {
      // this.dialogAwesomeConfirme(DialogLayoutDisplay.DANGER, {
      //   title: 'เกิดข้อผิดพลาดทางระบบ',
      //   description: error as string,
      // });
    }
    // const timer = setTimeout(() => {
    //   this.isLoad = false;
    //   clearTimeout(timer);
    // }, 300);
  }

  filter() {
    this.placeOrders99Buy = this.placeOrders
      .filter((item) => item.purity === 99 && item.tradeType === 'Sell')
      .sort((a, b) => a.price - b.price);
    this.placeOrders99Sell = this.placeOrders
      .filter((item) => item.purity === 99 && item.tradeType === 'Buy')
      .sort((a, b) => b.price - a.price);
    this.placeOrders96Buy = this.placeOrders
      .filter((item) => item.purity === 96 && item.tradeType === 'Sell')
      .sort((a, b) => a.price - b.price);
    this.placeOrders96Sell = this.placeOrders
      .filter((item) => item.purity === 96 && item.tradeType === 'Buy')
      .sort((a, b) => b.price - a.price);
  }

}
