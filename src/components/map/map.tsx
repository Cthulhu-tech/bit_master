import { FakeFetchDataTaxi } from "../../redux/taxiPlaceMarket/asyncAction/taxiPlaceMarketAsync";
import {
  deletePlaceMarketTaxi,
  updatePlaceMarketTaxiLoading,
} from "../../redux/taxiPlaceMarket/taxiPlaceMarket";
import { updateUserPosition } from "../../redux/userPosition/userPosition";
import { updateInputError } from "../../redux/inputError/inputError";
import { DataStartGeo, IStore, UserInput } from "../../redux/type";
import { SearchDropDown } from "../searchDropDown/searchDropDown";
import { ValidateInputUser } from "../../utils/validate/validate";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserCurrentValue,
  updateUserHiddenDropDown,
} from "../../redux/useInput/userInput";
import { memo, useState } from "react";
import { Cars } from "../cars/cars";
import { ErrorType } from "./type";
import ymaps from "yandex-maps";
import "./map.css";

const SearchDropDownMemo = memo(SearchDropDown);
const CarsMemo = memo(Cars);

export const MapComponents = () => {
  const dispatch = useDispatch();
  const [ymapsValue, setYmaps] = useState<typeof ymaps>();
  const userGeoPosition = useSelector<IStore, DataStartGeo>(
    (store) => store.userPosition
  );
  const inputError = useSelector<IStore, string>(
    (store) => store.inputError.error
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
        dispatch(updateUserCurrentValue({ value: valueSearch }));
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
    const addressLine = (object as any).getAddressLine();
    if (!ValidateInputUser(addressLine, dispatch, updateInputError)) {
      dispatch(deletePlaceMarketTaxi());
      dispatch(
        updateUserCurrentValue({
          value: "",
        })
      );
    } else {
      dispatch(updatePlaceMarketTaxiLoading({ loading: true }));
      dispatch(FakeFetchDataTaxi());
      dispatch(
        updateUserCurrentValue({
          value: addressLine,
        })
      );
    }
  };
  return (
    <section className="flex justify-end items-end flex-col w-full h-screen">
      <SearchDropDownMemo />
      <div className="h-screen w-full flex overflow-hidden">
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
              {inputError ? (
                <Placemark
                  geometry={userGeoPosition.center}
                  options={{
                    preset: "islands#greenDotIconWithCaption",
                    iconColor: "red",
                    iconContentLayout: inputError,
                  }}
                  properties={{
                    hintContent: inputError,
                    balloonContent: inputError,
                  }}
                  modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                />
              ) : (
                <Placemark
                  geometry={userGeoPosition.center}
                  options={{
                    preset: "islands#greenDotIconWithCaption",
                    iconColor: "yellow",
                  }}
                  properties={{
                    hintContent: userValue.value,
                    balloonContent: userValue.value,
                  }}
                  modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                />
              )}
            </Map>
          </YMaps>
        </article>
        <CarsMemo />
      </div>
    </section>
  );
};
