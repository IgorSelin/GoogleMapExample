import { useEffect, useRef } from "react";
import style from "./Map.module.css";
import { createMap } from "../../helpers/map";
import { mockMapLines } from "../../mockData/mapLines";

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const Map = ({ center, zoom }: MapProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createMap(ref, center, zoom, mockMapLines);
  }, [mockMapLines]);

  return (
    <div className={style.container}>
      <div ref={ref} className={style.map} />
    </div>
  );
};

export default Map;
