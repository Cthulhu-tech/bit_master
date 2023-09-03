export interface IAction<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface IStore {
  updatePageInfo: DataPageInfo;
  userPosition: DataStartGeo;
  userValue: UserInput;
  inputError: UserInputCurrentValueError;
}

export interface DataStartGeo extends DataPositionGeo {
  zoom: number;
  controls: string[];
}

export interface DataPositionGeo {
  center: number[];
}

export interface UserInput
  extends UserInputCurrentValue,
    UserInputCurrentInput,
    UserInputHiddenDropDown {}

export interface UserInputCurrentInput {
  current: HTMLInputElement | null;
}

export interface UserInputCurrentValue {
  value: string;
}

export interface UserInputHiddenDropDown {
  hidden: boolean;
}

export interface UserInputCurrentValueError {
  error: string;
}

export type DataPageInfo = {};
