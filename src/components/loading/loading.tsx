import { loadingMessage } from "./type";

export const Loading = (props: loadingMessage) => {
  return (
    <article className="w-1/3 bg-slate-100 h-full p-2 flex flex-col justify-center items-center">
      <span className="block font-bold text-slate-500 uppercase text-center">
        {props.message}
      </span>
    </article>
  );
};
