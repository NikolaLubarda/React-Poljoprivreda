import React from "react";
import Slider from "./Slider";
import DodatneSlike from "./DodatneSlike";
import MotivationalSections from "./MotivationalSections";

const Pocetna = ({ className }) => {
  return (
    <div>
      <div className={` ${className}`}>
        <Slider />
        <div>
          <MotivationalSections />
        </div>
        <DodatneSlike />
      </div>
    </div>
  );
};

export default Pocetna;
