import React from "react";
import "./MotivationalSections.css";

export default function MotivationalSections() {
  return (
    <div className="motivational-sections">
      <div className="section">
        <a href="/section1">
          <h2>Posvećenost je ključ uspjeha u poljoprivredi!</h2>
        </a>
      </div>
      <div className="section">
        <a href="/section2">
          <h2>Napredak dolazi uz strpljenje i trud.</h2>
        </a>
      </div>
      <div className="section">
        <a href="/section3">
          <h2>Rad u skladu s prirodom je najplodniji put.</h2>
        </a>
      </div>
    </div>
  );
}
