import { IAction, UserInputCurrentValueError } from "../type";

const defaultState: UserInputCurrentValueError = { error: "" };

const update = "set_input_error";

export const inputError = (
  state = defaultState,
  action: IAction<string, UserInputCurrentValueError>
) => {
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updateInputError = (payload: UserInputCurrentValueError) => ({
  type: update,
  payload,
});
