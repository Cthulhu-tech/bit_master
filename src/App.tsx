import { MapComponents } from "./components/map/map";
import { memo } from "react";

import "./index.css";
const MapComponentsMemo = memo(MapComponents);

export const App = () => {
  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="bg-stone-900">
      <form onSubmit={formHandler} className="max-w-screen-2xl m-auto">
        <MapComponentsMemo />
      </form>
    </main>
  );
};
