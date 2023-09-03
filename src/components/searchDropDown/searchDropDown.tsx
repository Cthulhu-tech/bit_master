import {
  updateUserCurrentInput,
  updateUserHiddenDropDown,
  updateUserInput,
} from "../../redux/useInput/userInput";
import { useDispatch, useSelector } from "react-redux";
import { createRef, useEffect, memo } from "react";
import { Address } from "../address/address";
import { IStore } from "../../redux/type";

const AddressMemo = memo(Address);

export const SearchDropDown = () => {
  const dispatch = useDispatch();
  const userValue = useSelector<IStore, string>(
    (store) => store.userValue.value
  );
  const inputError = useSelector<IStore, string>(
    (store) => store.inputError.error
  );
  const hidden = useSelector<IStore, boolean>(
    (store) => store.userValue.hidden
  );
  const loading = useSelector<IStore, boolean>(
    (store) => store.taxiInfo.loading
  );
  const inputCurrent = createRef<HTMLInputElement>();
  const userValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateUserInput({
        value: e.currentTarget.value,
        current: inputCurrent.current,
        hidden: false,
      })
    );
  };

  const hiddenHandler = () =>
    dispatch(updateUserHiddenDropDown({ hidden: true }));

  useEffect(() => {
    dispatch(
      updateUserCurrentInput({
        current: inputCurrent.current,
      })
    );
  });

  return (
    <section className="flex flex-row justify-items-center items-start w-full h-40">
      <div className="w-full flex flex-row justify-center items-start content-center">
        <div
          className={
            hidden
              ? "input__wrapper_hide-dropdown flex-col flex justify-items-center justify-center items-start content-center w-2/3 pr-5"
              : "input__wrapper_show-dropdown flex-col flex justify-items-center justify-center items-start content-center w-2/3 pr-5"
          }
        >
          <label
            htmlFor="small-input"
            className="block mt-10 font-bold text-white dark:text-white"
          >
            Search address
          </label>
          <input
            value={userValue}
            ref={inputCurrent}
            onFocus={hiddenHandler}
            type="text"
            onChange={userValueHandler}
            id="small-input"
            className={
              inputError
                ? "block w-full p-2 mt-2 mb-2 text-gray-900 border border-red-300 rounded-lg bg-red-50 sm:text-xs focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                : "block w-full p-2 mt-2 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            }
          />
          <button
            type="submit"
            disabled={loading}
            className={
              inputError
                ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                : loading
                ? "bg-slate-200 hover:bg-slate-100 text-white font-bold py-2 px-4 rounded"
                : "bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            }
          >
            {loading ? "Plece wait" : "Search Taxi"}
          </button>
        </div>
        <AddressMemo />
      </div>
    </section>
  );
};
