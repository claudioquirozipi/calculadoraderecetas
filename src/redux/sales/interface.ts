export interface iSales extends Array<iSale> {}
export interface iSale {
  id: string;
  nameSale: string;
  costs: number;
  taxes: number;
  profits: number;
  price: number;
  sales: number;
  totalProfit: number;
  totalIncome: number;
}
