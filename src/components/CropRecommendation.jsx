import React, { useState, useMemo } from "react";
import { ALL_STATES_CROPS } from "../data";
import { CROPS } from "../data/cropMaster";
import CropRecommendationCard from "./CropRecommendationCard";

export default function CropRecommendations() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [soilType, setSoilType] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [waterSources, setWaterSources] = useState([]);
  const [showReco, setShowReco] = useState(false);

  // Build lookup for faster access
  const cropLookup = useMemo(() => {
    const map = {};
    CROPS.forEach((c) => (map[c.id] = c));
    return map;
  }, []);

  const states = Object.keys(ALL_STATES_CROPS);
  const districts =
    state && ALL_STATES_CROPS[state] ? Object.keys(ALL_STATES_CROPS[state]) : [];

  const filled =
    (state ? 1 : 0) +
    (district ? 1 : 0) +
    (soilType ? 1 : 0) +
    (budget ? 1 : 0) +
    (duration ? 1 : 0) +
    (waterSources.length > 0 ? 1 : 0);
  const progress = (filled / 6) * 100;

  const toggleWaterSource = (src) => {
    setWaterSources((prev) =>
      prev.includes(src) ? prev.filter((w) => w !== src) : [...prev, src]
    );
  };

  const matchesCriterion = (crop, key, value) => {
    if (!value) return false;
    if (key === "budget") return crop.budget === value;
    if (key === "duration") return crop.duration === value;
    if (key === "soilType") return crop.soilTypes?.includes(value);
    if (key === "waterSources")
      return waterSources.some((w) => crop.waterSources?.includes(w));
    if (key === "district") return crop.districts?.includes(value);
    return false;
  };

  const getRecommendations = () => {
    if (!state) return [];

    const stateDistricts = district
      ? [district]
      : Object.keys(ALL_STATES_CROPS[state] || []);

    let cropIds = [];
    stateDistricts.forEach((d) => {
      cropIds.push(...(ALL_STATES_CROPS[state][d] || []));
    });

    let crops = cropIds.map((id) => cropLookup[id]).filter(Boolean);

    const totalCriteria = 5;

    crops = crops
      .map((crop) => {
        let score = 0;
        if (matchesCriterion(crop, "soilType", soilType)) score += 1;
        if (matchesCriterion(crop, "budget", budget)) score += 1;
        if (matchesCriterion(crop, "duration", duration)) score += 1;
        if (matchesCriterion(crop, "waterSources", waterSources)) score += 1;
        if (matchesCriterion(crop, "district", district)) score += 1;
        return {
          ...crop,
          score,
          matchPercent: Math.round((score / totalCriteria) * 100),
        };
      })
      .sort((a, b) => b.score - a.score);

    return crops;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-6">
        🌱 Smart Crop Recommendations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        {/* State */}
        <div>
          <label className="block font-semibold mb-2">Select State</label>
          <select
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setDistrict("");
              setShowReco(false);
            }}
            className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="">-- Select State --</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div>
          <label className="block font-semibold mb-2">Select District</label>
          <select
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              setShowReco(false);
            }}
            disabled={!state}
            className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 disabled:opacity-50"
          >
            <option value="">-- Select District --</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Soil Type */}
        <div>
          <label className="block font-semibold mb-2">Soil Type</label>
          <select
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="">-- Select Soil Type --</option>
            <option>Alluvial</option>
            <option>Clay</option>
            <option>Sandy</option>
            <option>Loamy</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block font-semibold mb-2">
            Preferred Growing Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="">-- Select Duration --</option>
            <option>2-3 months</option>
            <option>3-4 months</option>
            <option>4-6 months</option>
            <option>6+ months</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block font-semibold mb-2">
            Investment Budget (per acre)
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="">-- Select Budget --</option>
            <option>Below ₹15,000</option>
            <option>₹15,000 - ₹30,000</option>
            <option>₹30,000 - ₹50,000</option>
            <option>Above ₹50,000</option>
          </select>
        </div>

        {/* Water Sources */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2">
            Available Water Sources
          </label>
          <div className="flex gap-6 flex-wrap">
            {[
              "Rainwater",
              "Canal Irrigation",
              "Borewell/Tubewell",
              "Pond/Well",
            ].map((src) => (
              <label key={src} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={waterSources.includes(src)}
                  onChange={() => toggleWaterSource(src)}
                  className="dark:bg-gray-700"
                />
                {src}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Progress + Button */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded mr-4">
          <div
            className="bg-green-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <button
          onClick={() => setShowReco(true)}
          disabled={filled < 3}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition disabled:opacity-50"
        >
          » Get AI Recommendations
        </button>
      </div>

      {/* Results */}
      <h3 className="text-2xl font-semibold mb-4">AI-Generated Results</h3>
      {showReco ? (
        getRecommendations().length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {getRecommendations().map((crop) => (
              <CropRecommendationCard
                key={crop.id}
                crop={crop}
                extraInfo={`${crop.matchPercent}% match`}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No crops match your selected criteria sufficiently.
          </p>
        )
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          Your recommendations await — complete at least 3 fields above to see
          results!
        </p>
      )}
    </div>
  );
}
