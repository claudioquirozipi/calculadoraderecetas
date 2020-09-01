import { AnyAction } from "redux";

export const holaAction = (payload: AnyAction) => ({
  type: "HOLA",
  payload,
});
