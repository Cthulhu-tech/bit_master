import { deleteOrderTaxiData } from "../../redux/taxiOrderInfo/taxiOrderInfo";
import { IStore, OrderDataTaxiInfo } from "../../redux/type";
import { useDispatch, useSelector } from "react-redux";

export const Global = () => {
  const dispatch = useDispatch();
  const order = useSelector<IStore, OrderDataTaxiInfo>(
    (store) => store.orderTaxiInfo
  );

  const deleteOrder = () => dispatch(deleteOrderTaxiData());
  return (
    <div className="flex flex-col justify-center items-center absolute h-screen w-full top-0 left-0">
      <div className="bg-slate-100 opacity-50 h-screen w-full p-2 flex flex-col justify-center items-center top-0 left-0 absolute">
        <span className="block font-bold text-slate-500 uppercase text-center"></span>
      </div>
      <div className="w-1/3 h-72 bg-white relative flex flex-col justify-between p-5 items-center">
        <span className="block font-bold text-slate-500 uppercase text-center">
          You order is create {order.data[0].oreder_id}
        </span>
        <div
          onClick={deleteOrder}
          className="bg-indigo-900 hover:bg-indigo-700 w-24 text-center text-white font-bold py-2 px-4 rounded pointer"
        >
          {order.descr}
        </div>
      </div>
    </div>
  );
};
