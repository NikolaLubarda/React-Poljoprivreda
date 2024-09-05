import React from "react";
import Slider from "./Slider";
import SplitSekcija from "./SplitSekcija";
import DodatneSlike from "./DodatneSlike";

const Pocetna = () => {
  return (
    <div>
      <div className="relative">
        <Slider className="z-10" />
        <SplitSekcija className="z-20" />
        <DodatneSlike className="z-30" />
      </div>
    </div>
  );
};

export default Pocetna;
