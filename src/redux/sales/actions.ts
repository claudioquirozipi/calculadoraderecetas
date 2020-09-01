import { iSales } from "./interface";
import { SALES_INITIALIZE } from "./types";

export const salesInitializeAction = (payload: iSales) => ({
  type: SALES_INITIALIZE,
  payload,
});
