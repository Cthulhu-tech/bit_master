import {
  updateUserCurrentInput,
  updateUserHiddenDropDown,
  updateUserInput,
} from "../../redux/useInput/userInput";
import { useDispatch, useSelector } from "react-redux";
import { createRef, useEffect } from "react";
import { IStore } from "../../redux/type";

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
    <section className="flex flex-row justify-items-center items-center w-full h-40 pr-1 pl-1">
      <div className="w-full flex justify-items-center justify-center items-center content-center">
        <div
          className={
            hidden
              ? "input__wrapper_hide-dropdown w-full flex-col flex justify-items-center justify-center items-center content-center"
              : "input__wrapper_show-dropdown w-full flex-col flex justify-items-center justify-center items-center content-center"
          }
        >
          <label
            htmlFor="small-input"
            className="block mb-1 mt-1 text-sm font-medium text-gray-900 dark:text-white"
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
                ? "block w-full p-2 mt-5 mb-5 text-gray-900 border border-red-300 rounded-lg bg-red-50 sm:text-xs focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                : "block w-full p-2 mt-5 mb-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            }
          />
          <button
            type="submit"
            className={
              inputError
                ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            }
          >
            Search Taxi
          </button>
        </div>
      </div>
    </section>
  );
};
