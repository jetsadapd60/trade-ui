import { PlaceOrderRealTimeModel } from "./place-order.model";

export interface PlaceOrderRespone {
    message: string;
    status: string;
    total: number;
    trade: PlaceOrderRealTimeModel[];
  }

  export interface PlaceOrderModel {
    _id: string
    tradeType: string
    price: number
    quantity: number
    amount: number
    purity: number
  }