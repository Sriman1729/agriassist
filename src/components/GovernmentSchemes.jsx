import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function GovernmentSchemes() {
  const [search, setSearch] = useState("");

  const schemes = [
    {
      name: "PM-Kisan Samman Nidhi",
      desc: "Direct income support of ₹6,000/year for all eligible farmer families.",
      link: "https://pmkisan.gov.in/",
      bg: "bg-green-50 dark:bg-green-900/30",
      color: "text-green-600",
      tags: ["income", "support"],
    },
    {
      name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      desc: "Crop insurance against natural calamities, pests, and diseases.",
      link: "https://pmfby.gov.in/",
      bg: "bg-blue-50 dark:bg-blue-900/30",
      color: "text-blue-600",
      tags: ["insurance", "crop", "risk"],
    },
    {
      name: "Soil Health Card Scheme",
      desc: "Check soil nutrients and get advice on fertilizer use for higher yields.",
      link: "https://soilhealth.dac.gov.in/",
      bg: "bg-yellow-50 dark:bg-yellow-900/30",
      color: "text-yellow-600",
      tags: ["soil", "fertilizer"],
    },
    {
      name: "Kisan Credit Card (KCC)",
      desc: "Low-interest credit facility for farmers to cover cultivation costs.",
      link: "https://www.nabard.org/",
      bg: "bg-purple-50 dark:bg-purple-900/30",
      color: "text-purple-600",
      tags: ["credit", "loan"],
    },
    {
      name: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
      desc: "Improved irrigation facilities and efficient water management.",
      link: "https://pmksy.gov.in/",
      bg: "bg-teal-50 dark:bg-teal-900/30",
      color: "text-teal-600",
      tags: ["irrigation", "water"],
    },
    {
      name: "National Mission on Sustainable Agriculture (NMSA)",
      desc: "Schemes for climate-resilient farming and sustainable practices.",
      link: "https://nmsa.dac.gov.in/",
      bg: "bg-orange-50 dark:bg-orange-900/30",
      color: "text-orange-600",
      tags: ["sustainable", "climate"],
    },
    {
      name: "eNAM (National Agriculture Market)",
      desc: "Online trading platform for transparent mandi prices and fair trade.",
      link: "https://enam.gov.in/",
      bg: "bg-pink-50 dark:bg-pink-900/30",
      color: "text-pink-600",
      tags: ["market", "trade"],
    },
    {
      name: "Rashtriya Krishi Vikas Yojana (RKVY)",
      desc: "Funding for agricultural infrastructure and modern farming practices.",
      link: "https://rkvy.nic.in/",
      bg: "bg-indigo-50 dark:bg-indigo-900/30",
      color: "text-indigo-600",
      tags: ["funding", "infrastructure"],
    },
    {
      name: "Paramparagat Krishi Vikas Yojana (PKVY)",
      desc: "Promotes organic farming through cluster-based approaches.",
      link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx",
      bg: "bg-red-50 dark:bg-red-900/30",
      color: "text-red-600",
      tags: ["organic", "farming"],
    },
  ];

  // Filter schemes
  const filteredSchemes = schemes.filter(
    (scheme) =>
      scheme.name.toLowerCase().includes(search.toLowerCase()) ||
      scheme.desc.toLowerCase().includes(search.toLowerCase()) ||
      scheme.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🌿 Government Schemes</h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search schemes (e.g., insurance, credit, organic)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 text-base border rounded-lg shadow-sm 
                     focus:ring-2 focus:ring-green-500 focus:outline-none 
                     dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Schemes Grid */}
      {filteredSchemes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme, idx) => (
            <Card
              key={idx}
              className={`rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition ${scheme.bg}`}
            >
              <CardContent className="space-y-3 p-5">
                <h3 className="font-semibold text-lg">{scheme.name}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {scheme.desc}
                </p>
                <a
                  href={scheme.link}
                  className={`block w-full text-center font-medium ${scheme.color} hover:underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          ❌ No schemes found. Try another keyword.
        </p>
      )}
    </div>
  );
}
