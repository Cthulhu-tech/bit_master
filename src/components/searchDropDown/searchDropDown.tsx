import {
  updateUserCurrentInput,
  updateUserInput,
} from "../../redux/useInput/userInput";
import { useState, createRef, useEffect } from "react";
import { useDispatch } from "react-redux";

export const SearchDropDown = () => {
  const dispatch = useDispatch();

  const inputCurrent = createRef<HTMLInputElement>();
  const userValueHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      updateUserInput({
        value: e.currentTarget.value,
        current: inputCurrent.current,
      })
    );

  useEffect(() => {
    dispatch(
      updateUserCurrentInput({
        current: inputCurrent.current,
      })
    );
  });

  return (
    <section className="flex flex-row justify-items-center items-center w-full h-40 pr-1 pl-1">
      <div className="w-full">
        <div>
          <label
            htmlFor="small-input"
            className="block mb-1 mt-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search address
          </label>
          <input
            ref={inputCurrent}
            type="text"
            onChange={userValueHandler}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};
