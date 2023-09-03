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
const deleteOrder = "delete_taxi_info_order";

export const orderTaxiInfo = (
  state = defaultState,
  action: IAction<string, OrderDataTaxiInfo>
) => {
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    case deleteOrder:
      return { ...defaultState };
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

export const deleteOrderTaxiData = () => {
  return {
    type: deleteOrder,
  };
};

export const setOrderTaxiDataLoading = (payload: Loading) => {
  return {
    type: update,
    payload,
  };
};
