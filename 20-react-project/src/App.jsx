import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MeasureLand from "./pages/MeasureLand";
import Dashboard from "./components/Dashboard";

export default function App() {

  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/measure" element={<MeasureLand />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}