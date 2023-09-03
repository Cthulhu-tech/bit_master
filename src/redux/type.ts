export interface IAction<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface IStore {
  readonly updatePageInfo: DataPageInfo;
  readonly userPosition: DataStartGeo;
  readonly userValue: UserInput;
  readonly inputError: UserInputCurrentValueError;
  readonly taxiInfo: RootCrewsInfo;
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

export interface RootCrewsInfo {
  code: number;
  descr: string;
  data: DataCrewsInfo;
  loading: boolean;
}

export interface DataCrewsInfo {
  crews_info: CrewsInfo[];
}

export interface CrewsInfo {
  crew_id: number;
  car_mark: string;
  car_model: string;
  car_color: string;
  car_number: string;
  driver_name: string;
  driver_phone: string;
  lat: number;
  lon: number;
  distance: number;
}

export type DataPageInfo = {};
