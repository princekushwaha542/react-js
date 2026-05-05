import { useState } from "react";

export default function CropForm() {
  const [crop, setCrop] = useState("");
  const [area, setArea] = useState("");
  const [list, setList] = useState([]);

  const addCrop = () => {
    if (!crop || !area) return;
    setList([...list, { crop, area }]);
    setCrop("");
    setArea("");
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Add Crop</h2>

      <input
        placeholder="Crop"
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        placeholder="Area (acre)"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="border p-2 mr-2"
      />

      <button onClick={addCrop} className="bg-green-600 text-white px-3 py-1">
        Add
      </button>

      <ul className="mt-3">
        {list.map((item, i) => (
          <li key={i}>{item.crop} - {item.area} acre</li>
        ))}
      </ul>
    </div>
  );
}