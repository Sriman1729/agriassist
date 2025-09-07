import { useEffect, useState } from "react";
import { Card, CardContent } from "./card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { motion } from "framer-motion";

// Helper: format month & year properly
const getMonthYear = (date) =>
  date.toLocaleString("en-US", { month: "short", year: "numeric" });

// Reusable Crop Card
function CropCard({ crop, price, demand, change }) {
  const demandColors = {
    High: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 shadow-green-200 dark:shadow-green-800",
    Medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 shadow-yellow-200 dark:shadow-yellow-800",
    Low: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 shadow-red-200 dark:shadow-red-800",
  };

  const changeColors =
    change > 0
      ? "text-green-600 dark:text-green-400"
      : change < 0
      ? "text-red-600 dark:text-red-400"
      : "text-gray-500 dark:text-gray-300";

  const ChangeIcon =
    change > 0 ? ArrowUpRight : change < 0 ? ArrowDownRight : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-white dark:bg-gray-800">
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {crop}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-green-700 dark:text-green-400">{price}</p>
            <span
              className={`flex items-center text-sm font-medium ${changeColors}`}
            >
              <ChangeIcon className="w-4 h-4 mr-1" />
              {change}%
            </span>
          </div>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full shadow ${demandColors[demand]}`}
          >
            Demand: {demand}
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function MarketInsights() {
  // Start with static initial months Jan–Apr 2025
  const initialData = [
    { month: "Jan 2025", Paddy: 2000, Wheat: 1800, Maize: 1700, Sugarcane: 3100 },
    { month: "Feb 2025", Paddy: 2100, Wheat: 1850, Maize: 1750, Sugarcane: 3150 },
    { month: "Mar 2025", Paddy: 2200, Wheat: 1900, Maize: 1800, Sugarcane: 3200 },
    { month: "Apr 2025", Paddy: 2400, Wheat: 2000, Maize: 1800, Sugarcane: 3200 },
  ];

  const [priceTrends, setPriceTrends] = useState(initialData);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate live updates every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setPriceTrends((prev) => {
        const last = prev[prev.length - 1];

        // Convert last.month back to Date
        const lastDate = new Date(last.month);
        const nextDate = new Date(lastDate);
        nextDate.setMonth(nextDate.getMonth() + 1);

        const newData = {
          month: getMonthYear(nextDate), // <-- Proper Month + Year
          Paddy: last.Paddy + Math.floor(Math.random() * 200 - 100),
          Wheat: last.Wheat + Math.floor(Math.random() * 150 - 75),
          Maize: last.Maize + Math.floor(Math.random() * 100 - 50),
          Sugarcane: last.Sugarcane + Math.floor(Math.random() * 150 - 75),
        };

        setLastUpdated(new Date());
        return [...prev.slice(-5), newData]; // keep last 5 months
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const latest = priceTrends[priceTrends.length - 1];
  const prev = priceTrends[priceTrends.length - 2];

  const currentPrices = [
    {
      crop: "Paddy",
      price: `₹${latest.Paddy} / quintal`,
      demand: "High",
      change: (((latest.Paddy - prev.Paddy) / prev.Paddy) * 100).toFixed(1),
    },
    {
      crop: "Wheat",
      price: `₹${latest.Wheat} / quintal`,
      demand: "Medium",
      change: (((latest.Wheat - prev.Wheat) / prev.Wheat) * 100).toFixed(1),
    },
    {
      crop: "Maize",
      price: `₹${latest.Maize} / quintal`,
      demand: "Low",
      change: (((latest.Maize - prev.Maize) / prev.Maize) * 100).toFixed(1),
    },
    {
      crop: "Sugarcane",
      price: `₹${latest.Sugarcane} / quintal`,
      demand: "High",
      change: (
        ((latest.Sugarcane - prev.Sugarcane) / prev.Sugarcane) *
        100
      ).toFixed(1),
    },
  ];

  // Find top performer
  const topPerformer = currentPrices.reduce((max, crop) =>
    parseFloat(crop.change) > parseFloat(max.change) ? crop : max
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        📊 Market Insights
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Stay updated with crop prices, demand trends, and opportunities in
        different markets.
      </p>

      {/* Top Performer Highlight */}
      <Card className="rounded-2xl shadow-lg border-l-8 border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/40">
        <CardContent className="p-4">
          🌟 <span className="font-semibold">{topPerformer.crop}</span> is the
          top performer today with{" "}
          <span className="font-bold text-green-600 dark:text-green-400">
            {topPerformer.change}%
          </span>{" "}
          growth.
        </CardContent>
      </Card>

      {/* Current Prices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPrices.map((item, idx) => (
          <CropCard key={idx} {...item} />
        ))}
      </div>

      {/* Price Trends Chart */}
      <Card className="rounded-2xl shadow-md bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            📈 Price Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#9ca3af" />
              <XAxis dataKey="month" stroke="currentColor" />
              <YAxis stroke="currentColor" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  color: "#fff",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="Paddy"
                stroke="#22c55e"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Wheat"
                stroke="#3b82f6"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Maize"
                stroke="#f59e0b"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Sugarcane"
                stroke="#ef4444"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-right">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
