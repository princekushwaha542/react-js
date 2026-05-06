import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Map, Home } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navLink = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition ${
      location.pathname === path
        ? "bg-white text-green-700 shadow-md"
        : "text-white hover:bg-green-600"
    }`;

  return (
    <div className="w-full bg-gradient-to-r from-green-700 to-green-500 shadow-lg px-6 py-3 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-xl font-bold text-white">
        🌾 AgroTrack
      </h1>

      {/* Links */}
      <div className="flex gap-4">

        <Link to="/" className={navLink("/")}>
          <Home size={18} />
          Home
        </Link>

        <Link to="/dashboard" className={navLink("/dashboard")}>
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link to="/measure" className={navLink("/measure")}>
          <Map size={18} />
          Measure
        </Link>

      </div>

    </div>
  );
}