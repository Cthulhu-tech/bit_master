import { IAction, DataStartGeo, DataPositionGeo } from "../type";

const defaultState: DataStartGeo = {
  center: [55.751574, 37.573856],
  zoom: 12,
  controls: [],
};

const update = "update_user_position";

export const userPosition = (
  state = defaultState,
  action: IAction<string, DataStartGeo>
) => {
  console.log({ ...state, ...action.payload });
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updateUserPosition = (payload: DataPositionGeo) => ({
  type: update,
  payload,
});
