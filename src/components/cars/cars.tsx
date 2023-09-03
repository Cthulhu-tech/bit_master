import { FakeFetchDataTaxiCreateOrder } from "../../redux/createTaxiOrder/asyncAction/createTaxiOrderAsync";
import { deletePlaceMarketTaxi } from "../../redux/taxiPlaceMarket/taxiPlaceMarket";
import { CreateTaxiData } from "../../redux/createTaxiOrder/type";
import { IStore, RootCrewsInfo } from "../../redux/type";
import { useDispatch, useSelector } from "react-redux";
import { CarsCard } from "../carsCard/carsCard";
import { Loading } from "../loading/loading";

import "./cars.css";
import { memo } from "react";

const CarsCardMemo = memo(CarsCard);
const LoadingMemo = memo(Loading);

export const Cars = () => {
  const dispatch = useDispatch();
  const taxiInfo = useSelector<IStore, RootCrewsInfo>(
    (store) => store.taxiInfo
  );
  const taxiInfoCreateOrder = useSelector<IStore, CreateTaxiData>(
    (store) => store.orderTaxi
  );
  const createOrder = (crew_id: number) => {
    taxiInfoCreateOrder.crew_id = crew_id;
    dispatch(deletePlaceMarketTaxi());
    dispatch(FakeFetchDataTaxiCreateOrder(taxiInfoCreateOrder));
  };
  if (taxiInfo.loading)
    return (
      <LoadingMemo message={"Please wait. We are looking for a suitable car"} />
    );
  return (
    <aside className="w-1/3 flex flex-col">
      <article className="w-full bg-slate-100 p-2 flex flex-col overflow-y-auto car-container h-2/3">
        {taxiInfo.data.crews_info[0].crew_id !== 0 &&
          taxiInfo.data.crews_info.map(
            (car) =>
              car.crew_id !== taxiInfo.data.crews_info[0].crew_id && (
                <div onClick={() => createOrder(car.crew_id)} key={car.crew_id}>
                  <CarsCardMemo {...car} />
                </div>
              )
          )}
      </article>
      <article className="w-full bg-slate-100 p-2 flex flex-col overflow-y-auto car-container h-1/3">
        {taxiInfo.data.crews_info[0].crew_id !== 0 && (
          <>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Desirable car
            </div>
            <div
              onClick={() => createOrder(taxiInfo.data.crews_info[0].crew_id)}
            >
              <CarsCardMemo {...taxiInfo.data.crews_info[0]} />
            </div>
          </>
        )}
      </article>
    </aside>
  );
};
