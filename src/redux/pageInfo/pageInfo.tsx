import { IAction, DataPageInfo } from "../type";

const defaultState: DataPageInfo = {};

const update = "set_page_info";

export const pageInfo = (
  state = defaultState,
  action: IAction<string, DataPageInfo>
) => {
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updatePageInfo = (payload: DataPageInfo) => ({
  type: update,
  payload,
});
