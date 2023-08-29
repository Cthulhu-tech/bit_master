import { combineReducers, createStore } from "redux";
import { updatePageInfo } from "./pageInfo/pageInfo";

export const rootReducer = combineReducers({
  updatePageInfo,
});
export const store = createStore(rootReducer);
