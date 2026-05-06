import { useState, useEffect } from "react";

export default function CropForm() {
  const [crop, setCrop] = useState("");
  const [area, setArea] = useState("");
  const [expense, setExpense] = useState("");
  const [income, setIncome] = useState("");

  const [list, setList] = useState([]);

  // load data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("farmData"));
    if (saved) setList(saved);
  }, []);

  // save data
  useEffect(() => {
    localStorage.setItem("farmData", JSON.stringify(list));
  }, [list]);

  const addCrop = () => {
    if (!crop || !area || !expense || !income) return;

    const newCrop = {
      crop,
      area: Number(area),
      expense: Number(expense),
      income: Number(income),
    };

    setList([...list, newCrop]);

    setCrop("");
    setArea("");
    setExpense("");
    setIncome("");
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg">
      <h2 className="font-bold mb-3">Add Crop</h2>

      <input placeholder="Crop Name" value={crop}
        onChange={(e) => setCrop(e.target.value)}
        className="border p-2 m-1" />

      <input placeholder="Area (acre)" value={area}
        onChange={(e) => setArea(e.target.value)}
        className="border p-2 m-1" />

      <input placeholder="Expense" value={expense}
        onChange={(e) => setExpense(e.target.value)}
        className="border p-2 m-1" />

      <input placeholder="Income" value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="border p-2 m-1" />

      <button onClick={addCrop}
        className="bg-green-600 text-white px-4 py-2 mt-2 rounded">
        Add Crop
      </button>
       <div className=" text-black text-center p-3 mt-3">
      © 2026 Developed by <span className="font-bold">Prince Kushwaha</span> 🚀
    </div>
    </div>
  );
}