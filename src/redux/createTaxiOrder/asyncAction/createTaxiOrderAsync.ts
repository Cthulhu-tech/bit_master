import { AppDispatch } from "../../root";
import { CreateTaxiData } from "../type";

export const FakeFetchDataTaxiCreateOrder =
  (userPosition: CreateTaxiData): any =>
  (dispatch: AppDispatch) => {
    console.log(userPosition);
    return new Promise((resolve) => {
      resolve("");
    }).then((payload) => {});
  };
