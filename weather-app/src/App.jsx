import React, { useState, useEffect } from "react";

const App = () => {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Fake weather data generator
  const getWeatherData = (cityName) => {
    return {
      name: cityName,
      main: {
        temp: Math.floor(Math.random() * 15) + 20, // 20–35°C
        humidity: Math.floor(Math.random() * 50) + 30
      },
      weather: [
        {
          description: ["clear sky", "cloudy", "rainy"][Math.floor(Math.random() * 3)]
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

    setTimeout(() => {
      const fakeData = getWeatherData(city);
      setData(fakeData);
      setLoading(false);
    }, 800); // simulate API delay
  }, [city]);

  const searchHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    setCity(input);
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white">

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-[350px]">

        <h1 className="text-2xl font-bold text-center mb-4">
          Weather App 🌤️
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
          <button className="bg-blue-600 px-4 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <p className="text-center">Loading...</p>
        )}

        {/* Data */}
        {data && !loading && (
          <div className="text-center">

            <h2 className="text-3xl font-semibold">
              {data.name}
            </h2>

            <p className="text-5xl font-bold my-3">
              {data.main.temp}°C
            </p>

            <p className="capitalize text-lg">
              {data.weather[0].description}
            </p>

            <div className="flex justify-between mt-6 text-sm">
              <div>
                💨 Wind
                <p>{data.wind.speed} km/h</p>
              </div>

              <div>
                💧 Humidity
                <p>{data.main.humidity}%</p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default App;