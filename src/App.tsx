
import { MapComponents } from "./components/map/map";
import { memo } from "react";

import "./index.css";
const MapComponentsMemo = memo(MapComponents);

export const App = () => {

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main>
      <form onSubmit={formHandler}>
        <MapComponentsMemo />
      </form>
    </main>
  );
};
