import { UserInputCurrentValueError } from "../redux/type";

export type Callback = (payload: UserInputCurrentValueError) => {
  type: string;
  payload: UserInputCurrentValueError;
};
