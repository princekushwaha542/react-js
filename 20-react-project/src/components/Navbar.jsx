import { Link } from "react-router-dom";
<Link to="/dashboard">Dashboard</Link>
export default function Navbar() {
  return (
    <div className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="font-bold">🌾 Farmer Dashboard</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/measure">Measure Land</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}