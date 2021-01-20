import React from "react";
import "./styles.css";
import { useState } from "react";

const travelDB = {
  Summer: [
    { name: "Shillong", place: "Scotland Of East in Meghalaya" },
    { name: "Mount Abu", place: "Only Hill Station in Rajasthan" }
  ],

  Winter: [
    {
      name: "Kerala",
      place: "Munnar – Wayanad – Alleppey"
    },
    {
      name: "Karnataka",
      place: "Hampi – Mysore"
    }
  ],
  Rainy: [
    {
      name: "Lonavala",
      place: "Maharashtra (25°C)"
    },
    {
      name: "Coorg",
      place: "Karnataka (16°C)"
    }
  ]
};

export default function App() {
  const [selectedseason, setseason] = useState("Rainy");
  function seasonClickHandler(season) {
    setseason(season);
  }
  return (
    <div className="App">
      <h1> 🌇 Travel & Places </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite travels hotspots. Select a season to visit places{" "}
      </p>

      <div>
        {Object.keys(travelDB).map((season) => (
          <button
            onClick={() => seasonClickHandler(season)}
            style={{
              cursor: "pointer",
              background: "#9CA3AF",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {season}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selectedseason].map((travel) => (
            <li
              key={travel.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                background: "#FEE2E2"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {travel.name} </div>
              <div style={{ fontSize: "smaller" }}> {travel.place} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
