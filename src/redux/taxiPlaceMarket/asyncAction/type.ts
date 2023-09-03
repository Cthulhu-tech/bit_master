export interface SearchTaxiData {
  source_time: string;
  addresses: SearchTaxiDataAddress[];
}

export interface SearchTaxiDataAddress {
  address: string;
  lat: number;
  lon: number;
}
