import React, { useState, useEffect } from "react";

const App = () => {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeatherData = (cityName) => {
    return {
      name: cityName,
      main: {
        temp: Math.floor(Math.random() * 15) + 20,
        humidity: Math.floor(Math.random() * 50) + 30
      },
      weather: [
        {
          description: ["clear sky ☀️", "cloudy ☁️", "rainy 🌧️"][Math.floor(Math.random() * 3)]
        }
      ],
      wind: {
        speed: Math.floor(Math.random() * 10) + 1
      }
    };
  };

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError("");

    setTimeout(() => {
      try {
        const fakeData = getWeatherData(city);
        setData(fakeData);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }, 800);
  }, [city]);

  const searchHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCity(input);
    setInput("");
  };

  const getBackground = () => {
    if (!data) return "from-blue-500 to-indigo-700";
    const desc = data.weather[0].description;

    if (desc.includes("rain")) return "from-gray-600 to-gray-900";
    if (desc.includes("cloud")) return "from-gray-400 to-gray-700";
    return "from-yellow-400 to-orange-500";
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${getBackground()} text-white transition-all duration-500`}>

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl w-[350px]">

        <h1 className="text-2xl font-bold text-center mb-4">
          🌍 Weather App
        </h1>

        {/* Search */}
        <form onSubmit={searchHandler} className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter city..."
            className="flex-1 p-2 rounded-lg text-black outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-blue-600 px-4 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="text-red-300 text-center">{error}</p>
        )}

        {/* Loading */}
        {loading && (
          <p className="text-center animate-pulse">Loading...</p>
        )}

        {/* Data */}
        {data && !loading && (
          <div className="text-center">

            <h2 className="text-3xl font-semibold">
              📍 {data.name}
            </h2>

           

            <p className="capitalize text-lg">
              {data.weather[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <div className="bg-white/20 p-3 rounded-lg">
                💨 Wind
                <p className="font-bold">{data.wind.speed} km/h</p>
              </div>

             

          </div>
        )}

      </div>
    </div>
  );
};

export default App;
