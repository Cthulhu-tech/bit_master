import { IAction, Loading, OrderDataTaxiInfo } from "../type";

const defaultState: OrderDataTaxiInfo = {
  code: 0,
  descr: "",
  data: [
    {
      oreder_id: 0,
    },
  ],
  loading: false,
};

const update = "set_taxi_info_order";

export const orderTaxiInfo = (
  state = defaultState,
  action: IAction<string, OrderDataTaxiInfo>
) => {
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setOrderTaxiData = (payload: OrderDataTaxiInfo) => {
  return {
    type: update,
    payload,
  };
};

export const setOrderTaxiDataLoading = (payload: Loading) => {
  return {
    type: update,
    payload,
  };
};
