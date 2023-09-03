import {
  IAction,
  UserInput,
  UserInputCurrentInput,
  UserInputCurrentValue,
  UserInputHiddenDropDown,
} from "../type";

const defaultState: UserInput = { value: "", current: null, hidden: true };

const update = "set_user_value";
const updateCurrent = "set_user_current";

export const userValue = (
  state = defaultState,
  action: IAction<string, UserInput>
) => {
  switch (action.type) {
    case update:
      return { ...state, ...action.payload };
    case updateCurrent:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updateUserInput = (payload: UserInput) => ({
  type: update,
  payload,
});

export const updateUserCurrentInput = (payload: UserInputCurrentInput) => ({
  type: updateCurrent,
  payload,
});

export const updateUserCurrentValue = (payload: UserInputCurrentValue) => ({
  type: update,
  payload,
});

export const updateUserHiddenDropDown = (payload: UserInputHiddenDropDown) => ({
  type: update,
  payload,
});
