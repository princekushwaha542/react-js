import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { FeatureGroup } from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import * as turf from "@turf/turf";

function LocationMarker({ setPosition }) {
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);
        map.setView(coords, 17);
      },
      () => console.log("Location denied"),
      { enableHighAccuracy: true }
    );
  }, []);

  return null;
}

export default function MeasureLand() {
  const [position, setPosition] = useState([23.8, 80.4]);
  const [area, setArea] = useState(0);
  const [currentShape, setCurrentShape] = useState(null);
  const [savedFields, setSavedFields] = useState([]);

  const featureGroupRef = useRef();

  // load saved data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fields"));
    if (data) setSavedFields(data);
  }, []);

  // calculate area
  const onCreated = (e) => {
    const latlngs = e.layer.getLatLngs()[0];

    const coords = latlngs.map((p) => [p.lng, p.lat]);
    coords.push(coords[0]);

    const polygon = turf.polygon([coords]);
    const a = turf.area(polygon);

    setArea((a / 4046).toFixed(2));
    setCurrentShape(coords);
  };

  // save field
  const saveField = () => {
    if (!currentShape) return;

    const newField = {
      id: Date.now(),
      area,
      coords: currentShape,
    };

    const updated = [...savedFields, newField];
    setSavedFields(updated);
    localStorage.setItem("fields", JSON.stringify(updated));

    alert("✅ Field Saved!");
  };

  // delete field
  const deleteField = (id) => {
    const updated = savedFields.filter((f) => f.id !== id);
    setSavedFields(updated);
    localStorage.setItem("fields", JSON.stringify(updated));
  };

  // clear map
  const clearMap = () => {
    featureGroupRef.current.clearLayers();
    setArea(0);
    setCurrentShape(null);
  };

  return (
    <div className="p-4 grid md:grid-cols-2 gap-4">

      {/* LEFT: MAP */}
      <div className="bg-white rounded-2xl shadow p-4">

        <h2 className="font-bold mb-2">📍 Measure Land</h2>

        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <LocationMarker setPosition={setPosition} />

          <FeatureGroup ref={featureGroupRef}>
            <EditControl
              position="topright"
              onCreated={onCreated}
              draw={{
                polygon: true,
                rectangle: false,
                circle: false,
                marker: false,
                polyline: false
              }}
            />
          </FeatureGroup>
        </MapContainer>

        {/* Buttons */}
        <div className="mt-3 flex gap-2">

          <button
            onClick={saveField}
            className="bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            💾 Save
          </button>

          <button
            onClick={clearMap}
            className="bg-red-500 text-white px-4 py-2 rounded-xl"
          >
            ❌ Clear
          </button>

        </div>

        <p className="mt-2 font-semibold">🌾 Area: {area} Acre</p>
      </div>

      {/* RIGHT: SAVED FIELDS */}
      <div className="bg-white rounded-2xl shadow p-4">

        <h2 className="font-bold mb-3">📂 Saved Fields</h2>

        {savedFields.length === 0 && <p>No data</p>}

        {savedFields.map((field) => (
          <div
            key={field.id}
            className="border p-3 rounded-xl mb-2 flex justify-between items-center"
          >
            <span>🌾 {field.area} Acre</span>

            <button
              onClick={() => deleteField(field.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}