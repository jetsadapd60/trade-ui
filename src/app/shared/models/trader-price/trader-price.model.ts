export interface TraderPriceModel {
  bid: number;
  ask: number;
  ask99Bg1: number;
  bid99Bg1: number;
  ask96Bg1: number;
  bid96Bg1: number;
  thb: number;
  askAss: number;
  bidAss: number;
  status: "Online"|"Close";
  spotno: number;
}