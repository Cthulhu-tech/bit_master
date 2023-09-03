import { CarsCreate } from "../../../utils/carsCreate/carsCreate";
import { RootCrewsInfo } from "../../type";
import { AppDispatch } from "../../root";
import {
  updatePlaceMarketTaxi,
  updatePlaceMarketTaxiLoading,
} from "../taxiPlaceMarket";

export const FakeFetchDataTaxi = (): any => (dispatch: AppDispatch) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(CarsCreate()), 3000)
  ).then((payload) => {
    dispatch(updatePlaceMarketTaxi(payload as RootCrewsInfo));
    dispatch(updatePlaceMarketTaxiLoading({ loading: false }));
  });
};
