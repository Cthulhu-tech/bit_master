export interface IAction<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface IStore {
  updatePageInfo: DataPageInfo;
  userPosition: DataStartGeo;
  userValue: UserInput;
}

export type DataStartGeo = {
  center: number[];
  zoom: number;
  controls: string[];
};

export interface UserInput
  extends UserInputCurrentValue,
    UserInputCurrentInput {}

export interface UserInputCurrentInput {
  current: HTMLInputElement | null;
}

export interface UserInputCurrentValue {
  value: string;
}

export type DataPageInfo = {};
