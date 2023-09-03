import { SearchTaxiData } from "../taxiPlaceMarket/asyncAction/type";
import { CreateTaxiData, CreateTaxiDataCrewId } from "./type";
import { IAction } from "../type";

const defaultState: CreateTaxiData = {
  source_time: "",
  addresses: [{ address: "", lat: 0, lon: 0 }],
  crew_id: 0,
};

const update = "set_taxi_info_create";

export const orderTaxi = (
  state = defaultState,
  action: IAction<string, CreateTaxiData>
) => {
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setOrderTaxi = (payload: SearchTaxiData) => {
  return {
    type: update,
    payload,
  };
};

export const setCrewIdInOrderTaxi = (payload: CreateTaxiDataCrewId) => {
  return {
    type: update,
    payload,
  };
};
