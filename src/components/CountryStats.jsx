import React from "react";

// Import flag images from assets folder
import indianFlag from "../assets/indian_flag.png";
import usaFlag from "../assets/united_states.png";
import canadaFlag from "../assets/canada.png";
import uaeFlag from "../assets/uae.png";

// Define country data using imported images
const countries = [
  {
    name: "India",
    percent: 45,
    color: "bg-blue-500",
    flag: indianFlag,
  },
  {
    name: "USA",
    percent: 25,
    color: "bg-orange-500",
    flag: usaFlag,
  },
  {
    name: "CANADA",
    percent: 15,
    color: "bg-yellow-400",
    flag: canadaFlag,
  },
  {
    name: "UAE",
    percent: 1,
    color: "bg-red-500",
    flag: uaeFlag,
  },
];

const CountryStats = () => {
  return (
    <div className="bg-[#111827] text-white p-4 rounded-xl w-72 space-y-5 shadow-md">
      {countries.map((country, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={country.flag}
                alt={country.name}
                className="w-5 h-4 rounded-sm object-cover"
              />
              <span className="font-medium text-sm">{country.name}</span>
            </div>
            <span className="text-sm text-gray-300">{country.percent}%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div
              className={`h-2 rounded-full ${country.color}`}
              style={{ width: `${country.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryStats;
