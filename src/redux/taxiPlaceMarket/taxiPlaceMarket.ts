import { IAction, RootCrewsInfo } from "../type";

const defaultState: RootCrewsInfo = {
  code: 0,
  descr: "",
  loading: false,
  data: {
    crews_info: [
      {
        crew_id: 0,
        car_mark: "",
        car_model: "",
        car_color: "",
        car_number: "",
        driver_name: "",
        driver_phone: "",
        lat: 0,
        lon: 0,
        distance: 0,
      },
    ],
  },
};

const update = "set_taxi_info";
const delete_taxi = "delete_taxi_info";
const set_taxi_info_load = "set_taxi_info_load";

export const taxiInfo = (
  state = defaultState,
  action: IAction<string, RootCrewsInfo>
) => {
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    case set_taxi_info_load:
      return { ...state, ...action.payload };
    case delete_taxi:
      return { ...defaultState };
    default:
      return state;
  }
};

export const deletePlaceMarketTaxi = () => {
  return {
    type: delete_taxi,
  };
};

export const updatePlaceMarketTaxi = (payload: RootCrewsInfo) => {
  return {
    type: update,
    payload,
  };
};

export const updatePlaceMarketTaxiLoading = (payload: { loading: boolean }) => {
  return {
    type: update,
    payload,
  };
};
