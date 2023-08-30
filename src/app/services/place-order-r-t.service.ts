import { Injectable } from "@angular/core";
import { SocketIoService } from "./socket-io.service";
import { BehaviorSubject, map } from "rxjs";
import { HttpService } from "./http.service";
import { PlaceOrderRealTimeModel } from "../shared/models/place-order-r-t/place-order.model";
import { PlaceOrderRespone } from "../shared/models/place-order-r-t/place-order-respones.model";
import { environment } from "src/environments/environment";
import { TokenServiec } from "./token.service";
import { StorageService } from "./storage.service";
import { StorageKey } from "../shared/enums/token.enum";
import { io } from "socket.io-client";

@Injectable()
export class PlaceOrderRealTimeService {

  private readonly BASE_URL: string = environment.url_server_api;
  private readonly PLACE_ORDER_ENPOINT: string = 'api/trade/placeoder-all';

  private readonly PLACE_ORDER_URL = environment.place_order_url;
  private readonly LISTENER: string;

  private socket;

  /**
   * Store
   * - Store สำหรับเก็บ place orders
   */
  private placeOrder = new BehaviorSubject<PlaceOrderRealTimeModel[]>([]);

  /**
   * Selector
   * - ดึงข้อมูล place orders จาก Store
   */
  placeOrder$ = this.placeOrder.asObservable();

    constructor(
                private httpService: HttpService, 
                private tokenServiec: TokenServiec,
                private storageService: StorageService) {

                  this.getPlaceOrder()

                  this.LISTENER='traderplaceorders';

                  const extraHeaders = {
                                          traderid: this.storageService.getStorage(StorageKey.USER_ID) ?? '',
                                          token: this.tokenServiec.getAccessToken() ?? '',
                                        }
                  this.socket = io(`${this.PLACE_ORDER_URL}trader-socket`, { extraHeaders });

                  this.updatePlaceOrder();

    }


  /**
   * สำหรับอัพเดทสถานะ และ เพิ่มออเดอร์ที่มีการซื้อขาย
   */
  private updatePlaceOrder() {
    this.socket.on(this.LISTENER, (value: {type: "New", trade: PlaceOrderRealTimeModel} | {type: "Cancelled"|"Matched"|"Waiting", _id: string|string[], }) => {

      console.log(value)

      // เพิ่มออเดอร์
      if(value.type === "New") {

        //
        const trade = this.modifyPrice(value.trade);

        //
        let placeOrders: PlaceOrderRealTimeModel[] = this.placeOrder.value;
        //
        const treadesUpdate = [ trade, ...placeOrders ];

        //
        this.placeOrder.next(treadesUpdate);
        console.log(treadesUpdate)

      }
      // อัพเดทออเดอร์
      else {

        if(this.placeOrder.value) {

          // ก๊อปปี้ข้อมูลจาก memory
          let placeOrders: PlaceOrderRealTimeModel[] = this.placeOrder.value;

          // แยกเอาข้อมูลเฉพาะออเดอร์ ชนิดอาเรย์
          // const trades = placeOrder.trade;

          // กำหนดอาเร์ว่าง เพื่อรอรับออเดอร์
          let updateState: PlaceOrderRealTimeModel[] = [];

          // สถานะ Matched _id จะมีชนิดข้อมูล string ของ array
          if(value.type === "Matched" && typeof(value._id)  === "object") {

            // ลูปเข้าไปในออเดอร์ ลูปวงนอก
            updateState = placeOrders.map(
              (itemOutSide: PlaceOrderRealTimeModel) => {

              // ลูปเข้าไปใน _id ลูปวงใน
              (value._id as string[]).forEach(
                (itemInSide: string) => {

                  // ค้นหาออเดอร์ที่ _id ตรงกับ _id ที่สถานะเปลี่ยน
                  if(itemOutSide._id === itemInSide) {
                    // เปลี่ยนสถานะของออเดอร์
                    itemOutSide.tradeStatus=value.type;
                  }

                }
              )

              // คืนค่าออเดอร์ทั้งหมด
              return itemOutSide;
            })
          }
          // สถานะ Cancelled _id จะมีชนิดข้อมูล string ของ array
          else {
            updateState = placeOrders.map(item => {

              if(item._id === value._id) {
                item.tradeStatus=value.type;
              }
              return item;

            })
          }

          //
          // placeOrder = { ...placeOrder, trade: updateState };
          //
          this.placeOrder.next(updateState)


        }

      }

    })
  }

    private modifyPrice(trade: PlaceOrderRealTimeModel) {
      //
      if(trade.type == "Profit"){
        trade.priceLimit = trade.profit.priceLimit;
        trade.amountLimit = trade.profit.amountLimit;
        trade.priceStop =  trade.profit.amountStop;
        trade.amountStop =  trade.profit.amountStop;
      }
      else if(trade.type == "Limit"){
        trade.priceLimit = trade.price;
        trade.amountLimit = trade.amount;
      }
      else if(trade.type == "Stop"){
        trade.priceStop = trade.price;
        trade.amountStop = trade.amount;
      }
  
      return trade;
    }

    couter= 0;

      /**
   * สำหรับดึงออเดอร์ทั้งหมด ตอนเริ่มต้น
   */
  private getPlaceOrder(): void {
    const next = (res:PlaceOrderRespone) => {
                        console.log(res)
                        if(res && res.status === "success") {
                          res.trade.forEach(e=>{
                            this.modifyPrice(e)
                          })
                          this.placeOrder.next(res.trade);
                        }

                        // if(res && res.status === "notfound") {
                        //   console.error(res)
                        // }
                      }
    this.httpService
        .get<PlaceOrderRespone>(`${this.BASE_URL}${this.PLACE_ORDER_ENPOINT}`)
        .subscribe({next});
  }


}