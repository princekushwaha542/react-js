import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("farmData"));
    if (saved) setData(saved);
  }, []);

  const totalArea = data.reduce((sum, i) => sum + i.area, 0);
  const totalExpense = data.reduce((sum, i) => sum + i.expense, 0);
  const totalIncome = data.reduce((sum, i) => sum + i.income, 0);
  const profit = totalIncome - totalExpense;

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-4 rounded shadow">
          Total Crops: {data.length}
        </div>

        <div className="bg-white p-4 rounded shadow">
          Total Area: {totalArea} acre
        </div>

        <div className="bg-white p-4 rounded shadow">
          Expense: ₹{totalExpense}
        </div>

        <div className={`p-4 rounded shadow ${profit >= 0 ? "bg-green-200" : "bg-red-200"}`}>
          Profit: ₹{profit}
        </div>

      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Crop Details</h2>

        {data.map((item, i) => (
          <div key={i} className="border-b py-1">
            {item.crop} | {item.area} acre | ₹{item.expense} | ₹{item.income}
          </div>
        ))}

      </div>

    </div>
  );
}