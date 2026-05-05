import { MapContainer, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { FeatureGroup } from "react-leaflet";
import { useState } from "react";
import { calculateArea } from "../utils/areaCalc";

export default function MapMeasure() {
  const [area, setArea] = useState(0);

  const onCreated = (e) => {
    const layer = e.layer;
    const latlngs = layer.getLatLngs()[0];

    const result = calculateArea(latlngs);
    setArea(result);
  };

  return (
    <div>
      <MapContainer center={[23.8, 80.4]} zoom={13} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={onCreated}
            draw={{
              rectangle: true,
              polygon: true,
              circle: false,
              marker: false,
              polyline: false
            }}
          />
        </FeatureGroup>
      </MapContainer>

      <h2 className="mt-3 text-lg font-bold">
        Area: {area} Acre
      </h2>
    </div>
  );
}