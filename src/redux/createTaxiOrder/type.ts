import { SearchTaxiData } from "../taxiPlaceMarket/asyncAction/type";

export interface CreateTaxiData extends SearchTaxiData, CreateTaxiDataCrewId {}

export interface CreateTaxiDataCrewId {
  crew_id: number;
}
