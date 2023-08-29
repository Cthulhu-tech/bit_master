import { MapComponents } from "./components/map/map";
import { memo } from "react";

import "./index.css";

const MapComponentsMemo = memo(MapComponents);

export const App = () => {
  return (
    <main>
      <MapComponentsMemo />
    </main>
  );
};
