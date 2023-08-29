import { IAction, DataStartGeo } from "../type";

const defaultState: DataStartGeo = {
  center: [55.751574, 37.573856],
  zoom: 12,
  controls: [],
};

export const userPosition = (
  state = defaultState,
  action: IAction<string, DataStartGeo>
) => {
  switch (action.type) {
    default:
      return state;
  }
};
