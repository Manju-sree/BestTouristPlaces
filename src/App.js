import React from "react";
import "./styles.css";
import { useState } from "react";

const travelDB = {
Summer: [
    { name: "Shillong", place: "Scotland Of East in Meghalaya(9/10)" },
    { name: "Mount Abu", place: "Only Hill Station in Rajasthan(8/10)" },
    { name: "Coorg", place: "Scotland of India(10/10)" }
  ],

  Winter: [
    {
      name: "Kerala",
      place: "Munnar – Wayanad – Alleppey(9/10)"
    },
    {
      name: "Karnataka",
      place: "Hampi (8/10)"
    },
    {
      name: "Tamil Nandu",
      place: "Pondicherry (9/10)"
    }
  ],
  Rainy: [
    {
      name: "Maharashtra",
      place: "Lonavala(8/10)"
    },
    {
      name: "Goa",
      place: "(9/10)"
    },
    {
      name: "Karnataka",
      place: "Chikmagalur(9/10)"
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
