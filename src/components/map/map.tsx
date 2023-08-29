import { DataStartGeo, IStore, UserInput } from "../../redux/type";
import { SearchDropDown } from "../searchDropDown/searchDropDown";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import { memo, useState } from "react";
import ymaps from "yandex-maps";

import "./map.css";

import { updateUserCurrentValue } from "../../redux/useInput/userInput";
import { ErrorType } from "./type";
const SearchDropDownMemo = memo(SearchDropDown);

export const MapComponents = () => {
  const dispatch = useDispatch();
  const [ymapsValue, setYmaps] = useState<typeof ymaps>();
  const [address, setAddress] = useState<DataStartGeo>();
  const userGeoPosition = useSelector<IStore, DataStartGeo>(
    (store) => store.userPosition
  );

  const userValue = useSelector<IStore, UserInput>((store) => store.userValue);

  const onClickAddress = (e: any, api: typeof ymaps) => {
    const valueSearch = e.get("item").value;
    console.log(valueSearch);
    dispatch(updateUserCurrentValue({ value: valueSearch }));
    api
      .geocode(valueSearch)
      .then((result: any) => {
        const coord = result.geoObjects.get(0).geometry.getCoordinates();
        setAddress(coord);
      })
      .catch((error: ErrorType) => {
        console.log(error.message);
      });
  };

  const onLoad = (api: typeof ymaps) => {
    if (!userValue.current) return;
    setYmaps(api);
    const suggestView = new (api as any).SuggestView(userValue?.current);
    suggestView.events.add("select", (e: Event) => {
      return onClickAddress(e, api);
    });
  };

  const onClick = async (e: any) => {
    if (!ymapsValue) return;
    const coords = e.get("coords");
    setAddress(coords);
    const result = await ymapsValue.geocode(coords);
    const object = result.geoObjects.get(0);
    dispatch(
      updateUserCurrentValue({
        value: (object as any).getAddressLine(),
      })
    );
  };

  return (
    <section className="flex justify-end items-end flex-col w-full h-screen map-container">
      <SearchDropDownMemo />
      <YMaps
        query={{
          load: "package.full",
          apikey: process.env.REACT_APP_apiKeyYandex || "",
        }}
      >
        <Map
          onLoad={onLoad}
          onClick={onClick}
          state={address ? { ...userGeoPosition, ...address } : userGeoPosition}
        >
          <Placemark />
        </Map>
      </YMaps>
    </section>
  );
};
