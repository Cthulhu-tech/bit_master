import { IAction, DataStartGeo } from "../type";

const defaultState: DataStartGeo[] = [
  {
    center: [0, 0],
    zoom: 12,
    controls: [],
  },
];

const update = "set_taxi_info";

export const taxiInfo = (
  state = defaultState,
  action: IAction<string, DataStartGeo>
) => {
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updatePlaceMarketTaxi = () => {
  const payload = {};
  return {
    type: update,
    payload,
  };
};
