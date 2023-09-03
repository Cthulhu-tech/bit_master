import { FakeFetchDataTaxi } from "./redux/taxiPlaceMarket/asyncAction/taxiPlaceMarketAsync";
import { updateInputError } from "./redux/inputError/inputError";
import { Loading } from "./components/loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { MapComponents } from "./components/map/map";
import { memo, useState, useEffect } from "react";
import {
  deletePlaceMarketTaxi,
  updatePlaceMarketTaxiLoading,
} from "./redux/taxiPlaceMarket/taxiPlaceMarket";
import { IStore } from "./redux/type";

import "./index.css";
import { Global } from "./components/global/global";

const GlobalComponentsMemo = memo(Global);
const MapComponentsMemo = memo(MapComponents);

export const App = () => {
  const [address, setAddress] = useState<string>();
  const dispatch = useDispatch();
  const inputError = useSelector<IStore, string>(
    (store) => store.inputError.error
  );
  const userValue = useSelector<IStore, string>(
    (store) => store.userValue.value
  );
  const loading = useSelector<IStore, boolean>(
    (store) => store.taxiInfo.loading
  );
  const userPosition = useSelector<IStore, number[]>(
    (store) => store.userPosition.center
  );
  const loadingDataOrder = useSelector<IStore, boolean>(
    (store) => store.orderTaxiInfo.loading
  );
  const dataOrder = useSelector<IStore, number>(
    (store) => store.orderTaxiInfo.code
  );
  const formHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputError || address === userValue) return;
    dispatch(deletePlaceMarketTaxi());
    if (userValue.length <= 0)
      return dispatch(updateInputError({ error: "Enter a valid address" }));
    dispatch(updatePlaceMarketTaxiLoading({ loading: true }));
    dispatch(FakeFetchDataTaxi(userPosition, userValue));
  };

  useEffect(() => {
    if (loading) setAddress(userValue);
  }, [userValue, loading]);

  return (
    <>
      <main className="bg-stone-900">
        <form onSubmit={formHandler} className="max-w-screen-2xl m-auto">
          <MapComponentsMemo />
        </form>
        {loadingDataOrder && (
          <Loading message="We create your order" global={true} />
        )}
      </main>
      {dataOrder !== 0 && <GlobalComponentsMemo />}
    </>
  );
};
