import { combineReducers, createStore, applyMiddleware, Action } from "redux";
import { orderTaxiInfo } from "./taxiOrderInfo/taxiOrderInfo";
import { orderTaxi } from "./createTaxiOrder/createTaxiOrder";
import { taxiInfo } from "./taxiPlaceMarket/taxiPlaceMarket";
import { userPosition } from "./userPosition/userPosition";
import { inputError } from "./inputError/inputError";
import { userValue } from "./useInput/userInput";
import thunk, { ThunkAction } from "redux-thunk";
import { pageInfo } from "./pageInfo/pageInfo";

export const rootReducer = combineReducers({
  pageInfo,
  userPosition,
  userValue,
  inputError,
  taxiInfo,
  orderTaxi,
  orderTaxiInfo,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
