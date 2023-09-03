import { FakeFetchDataTaxi } from "./redux/taxiPlaceMarket/asyncAction/taxiPlaceMarketAsync";
import { updatePlaceMarketTaxiLoading } from "./redux/taxiPlaceMarket/taxiPlaceMarket";
import { useDispatch, useSelector } from "react-redux";
import { MapComponents } from "./components/map/map";
import { memo, useState, useEffect } from "react";
import { IStore } from "./redux/type";

import "./index.css";

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
  const formHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputError || address === userValue) return;
    dispatch(updatePlaceMarketTaxiLoading({ loading: true }));
    dispatch(FakeFetchDataTaxi());
  };

  useEffect(() => {
    if (loading) setAddress(userValue);
  }, [userValue, loading]);

  return (
    <main className="bg-stone-900">
      <form onSubmit={formHandler} className="max-w-screen-2xl m-auto">
        <MapComponentsMemo />
      </form>
    </main>
  );
};
