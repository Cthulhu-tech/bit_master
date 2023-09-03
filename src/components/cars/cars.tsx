import { IStore, RootCrewsInfo } from "../../redux/type";
import { CarsCard } from "../carsCard/carsCard";
import { Loading } from "../loading/loading";
import { useSelector } from "react-redux";

import "./cars.css";
import { memo } from "react";

const CarsCardMemo = memo(CarsCard);
const LoadingMemo = memo(Loading);

export const Cars = () => {
  const taxiInfo = useSelector<IStore, RootCrewsInfo>(
    (store) => store.taxiInfo
  );
  if (taxiInfo.loading)
    return (
      <LoadingMemo message={"Please wait. We are looking for a suitable car"} />
    );
  return (
    <aside className="w-1/3 flex flex-col">
      <article className="w-full bg-slate-100 p-2 flex flex-col overflow-y-auto car-container h-2/3">
        {taxiInfo.data.crews_info[0].crew_id !== 0 &&
          taxiInfo.data.crews_info.map((car) => (
            <CarsCardMemo {...car} key={car.crew_id} />
          ))}
      </article>
      <article className="w-full bg-slate-100 p-2 flex flex-col overflow-y-auto car-container h-1/3">
        {taxiInfo.data.crews_info[0].crew_id !== 0 && (
          <CarsCardMemo {...taxiInfo.data.crews_info[0]} />
        )}
      </article>
    </aside>
  );
};
