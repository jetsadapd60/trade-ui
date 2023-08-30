import { PlaceOrderRealTimeModel } from "./place-order.model";

export interface PlaceOrderRespone {
    message: string;
    status: string;
    total: number;
    trade: PlaceOrderRealTimeModel[];
  }