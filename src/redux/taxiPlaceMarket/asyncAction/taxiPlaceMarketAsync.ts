import { TimeValidate } from "../../../utils/timeValidate/timeValidate";
import { setOrderTaxi } from "../../createTaxiOrder/createTaxiOrder";
import { CarsCreate } from "../../../utils/carsCreate/carsCreate";
import { RootCrewsInfo } from "../../type";
import { AppDispatch } from "../../root";
import { SearchTaxiData } from "./type";
import {
  updatePlaceMarketTaxi,
  updatePlaceMarketTaxiLoading,
} from "../taxiPlaceMarket";

export const FakeFetchDataTaxi =
  (userPosition: number[], userAddress: string): any =>
  (dispatch: AppDispatch) => {
    return new Promise((resolve) => {
      const createObjectToFetch: SearchTaxiData = {
        source_time: TimeValidate(""),
        addresses: [
          { address: userAddress, lat: userPosition[0], lon: userPosition[1] },
        ],
      };
      dispatch(setOrderTaxi(createObjectToFetch));
      setTimeout(() => resolve(CarsCreate(createObjectToFetch)), 3000);
    }).then((payload) => {
      dispatch(updatePlaceMarketTaxi(payload as RootCrewsInfo));
      dispatch(updatePlaceMarketTaxiLoading({ loading: false }));
    });
  };
