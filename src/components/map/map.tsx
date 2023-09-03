import { DataStartGeo, IStore, UserInput } from "../../redux/type";
import { SearchDropDown } from "../searchDropDown/searchDropDown";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import { memo, useState } from "react";
import ymaps from "yandex-maps";

import "./map.css";

import { ErrorType } from "./type";
import { updateUserPosition } from "../../redux/userPosition/userPosition";
import {
  updateUserCurrentValue,
  updateUserHiddenDropDown,
} from "../../redux/useInput/userInput";
import { updateInputError } from "../../redux/inputError/inputError";
import { ValidateInputUser } from "../../utils/validate";

const SearchDropDownMemo = memo(SearchDropDown);

export const MapComponents = () => {
  const dispatch = useDispatch();
  const [ymapsValue, setYmaps] = useState<typeof ymaps>();
  const userGeoPosition = useSelector<IStore, DataStartGeo>(
    (store) => store.userPosition
  );

  const userValue = useSelector<IStore, UserInput>((store) => store.userValue);

  const onClickAddress = (e: any, api: typeof ymaps) => {
    const valueSearch = e.get("item").value;
    if (!ValidateInputUser(valueSearch, dispatch, updateInputError))
      return dispatch(updateUserCurrentValue({ value: "" }));
    api
      .geocode(valueSearch)
      .then((result: any) => {
        const coord = result.geoObjects
          .get(0)
          .geometry.getCoordinates() as number[];
        dispatch(updateUserPosition({ center: coord }));
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
    dispatch(updateUserHiddenDropDown({ hidden: true }));
    const coords = e.get("coords") as number[];
    dispatch(updateUserPosition({ center: coords }));
    const result = await ymapsValue.geocode(coords);
    const object = result.geoObjects.get(0);
    const userValue = (object as any).getAddressLine();
    console.log(userValue);
    if (!ValidateInputUser(userValue, dispatch, updateInputError))
      dispatch(
        updateUserCurrentValue({
          value: "",
        })
      );
    else
      dispatch(
        updateUserCurrentValue({
          value: userValue,
        })
      );
  };

  return (
    <section className="flex justify-end items-end flex-col w-full h-screen">
      <SearchDropDownMemo />
      <div className="h-screen w-full flex pt-5">
        <article className="w-2/3 map-container">
          <YMaps
            query={{
              load: "package.full",
              apikey: process.env.REACT_APP_apiKeyYandex || "",
            }}
          >
            <Map
              onLoad={onLoad}
              onClick={onClick}
              width={"100%"}
              height={"100%"}
              state={userGeoPosition}
            >
              <Placemark
                geometry={userGeoPosition.center}
                options={{
                  preset: "islands#greenDotIconWithCaption",
                  iconColor: "yellow",
                }}
              />
            </Map>
          </YMaps>
        </article>
        <article className="w-1/3"></article>
      </div>
    </section>
  );
};
