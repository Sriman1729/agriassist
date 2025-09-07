import fs from "fs";
import csv from "csv-parser";

const inputFile = "./src/data/Ind_adm2_Points.csv";
const outputFile = "./src/data/indiaDistrictsWithCoords.json";

const result = {};

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    const state = row.State?.trim();
    const district = row.District?.trim();
    const lat = parseFloat(row.Latitude);
    const lon = parseFloat(row.Longitude);

    if (!state || !district || isNaN(lat) || isNaN(lon)) return;

    if (!result[state]) result[state] = [];

    // ✅ Check if district already exists → avoid duplicates
    const exists = result[state].some((d) => d.name === district);
    if (!exists) {
      result[state].push({
        name: district,
        lat,
        lon,
      });
    }
  })
  .on("end", () => {
    fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), "utf-8");
    console.log(`✅ Clean JSON saved to ${outputFile}`);
  });
