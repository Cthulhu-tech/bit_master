import { userPosition } from "./userPosition/userPosition";
import { combineReducers, createStore } from "redux";
import { userValue } from "./useInput/userInput";
import { pageInfo } from "./pageInfo/pageInfo";

export const rootReducer = combineReducers({
  pageInfo,
  userPosition,
  userValue,
});
export const store = createStore(rootReducer);
