import { CrewsInfo } from "../../redux/type";

export const CarsCard = (props: CrewsInfo) => {
  return (
    <div className="mb-2 border-r border-b border-l cursor-pointer border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
      <div className="max-w-sm w-full lg:max-w-full lg:flex flex flex-col justify-between">
        <div className="text-gray-900 font-bold text-xl mb-2">
          {props.driver_name}
        </div>
        <p className="text-gray-700 text-base">Mark: {props.car_mark}</p>
        <p className="text-gray-700 text-base">Color: {props.car_color}</p>
        <p className="text-gray-700 text-base">Distance: {props.distance}</p>
      </div>
    </div>
  );
};
