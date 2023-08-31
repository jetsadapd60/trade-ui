export interface SummaryHeding {
    totals: {
      buyBg: number;
      buyKg: number;
      buyOz: number;
      buyPl: number;
      buyOuts: number;
      buyAmount: number;
      sellBg: number;
      sellKg: number;
      sellOz: number;
      sellPl: number;
      sellOuts: number;
      sellAmount: number;
      totalBg: number;
      totalKg: number;
      totalOz: number;
      totalPl: number;
      totalOuts: number;
      totalAmount: number;
    };
    summary: {
      buyBg: number;
      buyBgQty: number;
      buyKg: number;
      buyKgQty: number;
      buyOz: number;
      buyOzQty: number;
      buyUsd: number;
      totalBuyKg: number;
      totalBuyQty: number;
  
      sellBg: number;
      sellBgQty: number;
      sellKg: number;
      sellKgQty: number;
      sellOz: number;
      sellOzQty: number;
      sellUsd: number;
      totalSellKg: number;
      totalSellQty: number;
    };
  }