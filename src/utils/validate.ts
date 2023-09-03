import { AnyAction, Dispatch } from "redux";
import { Callback } from "./type";

export const ValidateInputUser = (
  userValue: string,
  dispatch: Dispatch<AnyAction>,
  callback: Callback
) => {
  const regex = /^[а-яА-ЯёЁйЙ]+(\,).+([0-9]+[а-яА-ЯёЁйЙ]+|[0-9]+)$/gm;
  if (!regex.test(userValue.replaceAll(" ", ""))) {
    dispatch(callback({ error: "Enter a valid address" }));
    return false;
  }
  dispatch(callback({ error: "" }));
  return true;
};
