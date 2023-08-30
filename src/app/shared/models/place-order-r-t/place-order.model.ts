export interface PlaceOrderRealTimeModel {
    _id: string
    orderRef: string
    memberRef: string
    memberType: string
    marketingTeamId: string
    marketingTeamName: string
    purity: number
    tradeType: string
    quantity: number
    price: number
    tradeName: string;
    amount: number
    priceLimit: number
    amountLimit: number
    priceStop: number
    amountStop: number
    created: string
    type: string
    tradeStatus: "Waiting"|"Matched"|"Cancelled"
    profit: PlaceOrderProfitModel
  }
  
  interface PlaceOrderProfitModel {
    priceLimit: number
    priceStop: number
    amountLimit: number
    amountStop: number
  }