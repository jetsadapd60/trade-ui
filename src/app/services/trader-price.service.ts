import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SocketIoService } from "./socket-io.service";
import { TraderPriceModel } from "../shared/models/trader-price/trader-price.model";

@Injectable()
export class TraderPriceService {
    private priceDefalut: TraderPriceModel = {
        bid: 0,
        ask: 0,
        ask99Bg1: 0,
        bid99Bg1: 0,
        ask96Bg1: 0,
        bid96Bg1: 0,
        thb: 0,
        askAss: 0,
        bidAss: 0,
        status: "Online",
        spotno: 0,
    }
    private price = new BehaviorSubject<TraderPriceModel>(this.priceDefalut);
    price$ = this.price.asObservable();


  constructor(private socketService: SocketIoService) {

    this.getTraderPrice();
    
  }

  getTraderPrice() {
    this.socketService.socket.on('traderprice', price => this.price.next(price));
  }
}