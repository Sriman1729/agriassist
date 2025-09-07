// Weather.jsx
import React, { useState } from "react";
import { Card, CardContent } from "../components/card";
import { Button } from "../components/button";
import locations from "../data/indiaDistricts.json";

const API_KEY = "f438baf46e45d28234c799897dc72268";

const conditionIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
};

// ✅ Tips (helpful suggestions only)
const getWeatherTips = (temp, condition, humidity) => {
  const tips = [];

  if (temp >= 20 && temp <= 30)
    tips.push("🌿 Great time for crop growth.");
  if (temp > 25 && humidity < 50)
    tips.push("💧 Light irrigation will help.");
  if (condition === "Clear") tips.push("☀️ Ideal for field work.");
  if (condition === "Clouds") tips.push("🌱 Good day for sowing.");
  if (condition === "Rain") tips.push("🌾 Rain helps soil moisture.");

  if (tips.length === 0) tips.push("✅ Weather looks stable.");
  return tips;
};

// ✅ Alerts (urgent only)
const getDynamicAlerts = (weather) => {
  if (!weather || !weather.weather) return [];

  const condition = weather.weather[0].main;
  const temp = weather.main.temp;

  const alerts = [];
  if (temp < 10) alerts.push("🚨 Frost risk – protect seedlings!");
  if (temp > 38) alerts.push("🔥 Heatwave – irrigate frequently!");
  if (condition === "Thunderstorm")
    alerts.push("⚡ Strong thunderstorm expected!");
  if (condition === "Rain" && weather.main.humidity > 85)
    alerts.push("🌧️ Heavy rainfall risk – check drainage.");

  return alerts;
};

export default function Weather() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod !== 200) throw new Error("Weather not found");
      setWeather(data);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},IN&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();
      const daily = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(daily);
    } catch (err) {
      console.error(err);
      setWeather(null);
      setForecast([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city) fetchWeather(city);
  };

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          const { latitude, longitude } = coords;
          setLoading(true);
          setError(false);
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
            );
            const data = await res.json();
            if (data.cod !== 200) throw new Error("Weather not found");
            setWeather(data);

            const forecastRes = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
            );
            const forecastData = await forecastRes.json();
            const daily = forecastData.list.filter((item) =>
              item.dt_txt.includes("12:00:00")
            );
            setForecast(daily);
          } catch (err) {
            console.error(err);
            setError(true);
          } finally {
            setLoading(false);
          }
        },
        () => setError(true)
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          🌤️ Weather Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Minimal & Smart farming insights
        </p>
      </div>

      {/* State & City Dropdown */}
      <div className="bg-white dark:bg-gray-900 rounded-lg border p-4 mb-6 flex flex-col gap-3">
        <select
          className="p-2 rounded-lg border dark:bg-gray-800 dark:text-gray-200"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setCity("");
            setWeather(null);
            setForecast([]);
          }}
        >
          <option value="">Select State</option>
          {Object.keys(locations).map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>

        {state && (
          <select
            className="p-2 rounded-lg border dark:bg-gray-800 dark:text-gray-200"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select District</option>
            {locations[state].map((ct) => (
              <option key={ct} value={ct}>
                {ct}
              </option>
            ))}
          </select>
        )}

        {city && (
          <Button onClick={handleSearch} className="px-4 py-2 text-sm">
            Get Weather
          </Button>
        )}
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-center text-gray-500">⏳ Loading...</p>}
      {error && !loading && (
        <p className="text-center text-red-500">⚠️ Couldn’t fetch weather</p>
      )}

      {/* Weather + Tips */}
      {weather && weather.main && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Main Weather */}
          <Card className="md:col-span-2 border rounded-lg">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium">{weather.name}</h2>
                <p className="text-3xl font-bold">{weather.main.temp}°C</p>
                <p className="capitalize text-gray-600 dark:text-gray-300">
                  {weather.weather[0].description}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date().toLocaleDateString(undefined, {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl">
                  {conditionIcons[weather.weather[0].main] || "🌤️"}
                </span>
                <p className="text-xs text-gray-500 mt-2">
                  Wind: {weather.wind.speed} m/s
                </p>
                <p className="text-xs text-gray-500">
                  Humidity: {weather.main.humidity}%
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="border rounded-lg">
            <CardContent className="p-3">
              <h3 className="text-sm font-semibold mb-2">🌱 Tips</h3>
              <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                {getWeatherTips(
                  weather.main.temp,
                  weather.weather[0].main,
                  weather.main.humidity
                ).map((tip, i) => (
                  <li key={i} className="p-2 border rounded-lg">
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Forecast + Alerts */}
      {forecast.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Forecast grid */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {forecast.map((day) => {
              const date = new Date(day.dt_txt).toLocaleDateString(undefined, {
                weekday: "short",
                day: "numeric",
              });
              const condition = day.weather[0].main;
              const icon = conditionIcons[condition] || "🌤️";
              const temp = Math.round(day.main.temp);

              const tips = getWeatherTips(temp, condition, day.main.humidity);

              return (
                <Card
                  key={day.dt}
                  className="border rounded-lg text-center bg-white dark:bg-gray-800"
                >
                  <CardContent className="p-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {date}
                    </p>
                    <p className="text-xl">{icon}</p>
                    <p className="text-sm font-medium">{temp}°C</p>
                    {/* Mini tips under forecast */}
                    {tips.length > 0 && (
                      <ul className="text-[10px] mt-1 text-gray-600 dark:text-gray-300 space-y-1">
                        {tips.slice(0, 2).map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Alerts */}
          <Card className="border rounded-lg">
            <CardContent className="p-3">
              <h3 className="text-sm font-semibold mb-2">⚠️ Alerts</h3>
              <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                {getDynamicAlerts(weather).map((alert, i) => (
                  <li key={i} className="p-2 border rounded-lg">
                    {alert}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Location Button */}
      <button
        onClick={handleUseLocation}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black text-xl shadow hover:scale-105 transition"
      >
        📍
      </button>
    </div>
  );
}
