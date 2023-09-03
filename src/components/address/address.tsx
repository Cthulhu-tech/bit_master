import { useSelector } from "react-redux";
import { IStore } from "../../redux/type";

export const Address = () => {
  const userValue = useSelector<IStore, string>(
    (store) => store.userValue.value
  );
  return (
    <section className="w-1/3 h-40">
      <article className="bg-slate-100 w-full h-full p-2 flex flex-col">
        <span className="block font-bold text-slate-900 uppercase text-center">
          where are we picking you from
        </span>
        <div className="flex flex-col align-items-center h-full justify-content-center justify-center">
          <span className="block font-bold text-slate-500 uppercase text-center">
            {userValue}
          </span>
        </div>
      </article>
    </section>
  );
};
