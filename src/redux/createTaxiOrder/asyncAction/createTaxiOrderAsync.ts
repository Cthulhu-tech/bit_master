import { OrderDataTaxiInfo } from "../../type";
import {
  setOrderTaxiData,
  setOrderTaxiDataLoading,
} from "../../taxiOrderInfo/taxiOrderInfo";
import { AppDispatch } from "../../root";
import { CreateTaxiData } from "../type";
import { faker } from "@faker-js/faker";

export const FakeFetchDataTaxiCreateOrder =
  (userPosition: CreateTaxiData): any =>
  (dispatch: AppDispatch) => {
    console.log(userPosition);
    dispatch(setOrderTaxiDataLoading({ loading: true }));
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            code: faker.number.int({ min: 1, max: 99999 }),
            descr: "Ok",
            data: [
              {
                oreder_id: faker.number.int({ min: 1, max: 99999 }),
              },
            ],
            loading: false,
          }),
        3000
      );
    }).then((payload) => {
      console.log(payload);
      dispatch(setOrderTaxiData(payload as OrderDataTaxiInfo));
      dispatch(setOrderTaxiDataLoading({ loading: false }));
    });
  };
