import { useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([
    { crop: "Loki", area: 1.5, expense: 20000, income: 35000 },
    { crop: "Moong", area: 2, expense: 30000, income: 25000 },
  ]);

  // calculations
  const totalArea = data.reduce((sum, item) => sum + item.area, 0);
  const totalExpense = data.reduce((sum, item) => sum + item.expense, 0);
  const totalIncome = data.reduce((sum, item) => sum + item.income, 0);
  const profit = totalIncome - totalExpense;

  return (
    <div className="p-6 bg-gradient-to-br from-green-100 to-green-300 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-gray-500">Total Crops</h2>
          <p className="text-2xl font-bold">{data.length}</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-gray-500">Total Area</h2>
          <p className="text-2xl font-bold">{totalArea} acre</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-gray-500">Total Expense</h2>
          <p className="text-2xl font-bold">₹{totalExpense}</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-gray-500">Profit / Loss</h2>
          <p className={`text-2xl font-bold ${profit >= 0 ? "text-green-600" : "text-red-600"}`}>
            ₹{profit}
          </p>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-3">Crop Details</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Crop</th>
              <th>Area</th>
              <th>Expense</th>
              <th>Income</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b">
                <td>{item.crop}</td>
                <td>{item.area} acre</td>
                <td>₹{item.expense}</td>
                <td>₹{item.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}